let name = "Arunkumar";
const age = 25;

function greet(userName, userAge) {
  console.log(`Hello, ${userName}! You are ${userAge} years old.`);
}

greet(name, age);

// 3. Loop example
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 4. Array example
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit) => {
  console.log("I like " + fruit);
});

// 5. Simple DOM manipulation (works in a browser)
document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  let message = document.createElement("h2");
  message.textContent = `Welcome, ${name}!`;
  body.appendChild(message);
});

document.addEventListener("click", () => {
  alert("You clicked anywhere on the page!");
});
