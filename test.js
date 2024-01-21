const prompt = require("prompt-sync")(); // Create a synchronous prompt instance

function calculateSum() {
  let numbersString = prompt("Enter numbers separated by commas:");
  let numbersArray = numbersString.split(",");

  // Convert each string number to a numerical value
  let parsedNumbers = numbersArray.map(Number);

  // Calculate the sum of the numbers
  let sum = parsedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // Print the sum
  console.log("The sum of the numbers is:", sum);
}

calculateSum();