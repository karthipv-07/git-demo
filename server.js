const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const env = process.argv[2] || "development";
dotenv.config({ path: `.env.${env}` });

const logDir = '/app/logs';
const logFile = path.join(logDir, 'app.log');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

function log(message) {
    const time = new Date().toISOString();
    const finalMessage = `[${time}] [${env.toUpperCase()}] ${message}`;
console.log(finalMessage);
fs.appendFileSync(logFile, finalMessage + '\n');
}

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const APP = process.env.APP;

app.get('/', (req, res) => {
  res.send('Hello World from Ngrok ' + APP);
});

app.get('/health', (req, res) => {
    log("Health check called");
    res.status(200).json({
        status: "UP"
    });
});

app.post('/webhook', (req, res) => {
    console.log("Webhook received:");
    console.log(req.body);
    res.status(200).send("Received");
});

app.listen(PORT, () => {
    log("Server running on port" + PORT);
});
