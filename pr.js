const prompt = require('prompt-sync')();

let input = prompt("Enter a number: ");
while (isNaN(Number(input))) {
  console.log("That's not a valid number. Please try again.");
  input = prompt("Enter a number: ");
}

console.log(`You entered the number: ${input}`);
