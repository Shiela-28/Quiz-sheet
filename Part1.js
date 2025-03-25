// Part I. Code Transformations

// 1.A. Get age and average, check eligibility for BSCS program
let age = parseInt(prompt("Enter your age: ")); // Prompts the user to enter their age and converts it to an integer.
let genAverage = parseInt(prompt("Enter your general average: ")); // Prompts the user to enter their general average and converts it to an integer.

// Uses a ternary operator to check eligibility.  More concise than a full if/else statement.
let collegeBSCS = (age >= 18 && genAverage >= 83) ? 
  "You may enter College, under BSCS Program" : 
  "You do not meet the minimum age and GPA requirements for the BSCS program.";

console.log(collegeBSCS); // Displays the eligibility message.


// 2.B. Get subject and grade, determine enrollment options
let subject = prompt("Enter your subject: ").toLowerCase(); // Prompts for subject, converts to lowercase for case-insensitive comparison.
let grade = parseInt(prompt("Enter your grade: ")); // Prompts for grade and converts it to an integer.

// Uses if/else if/else for better readability and handling multiple conditions.
let registrarMessage; //Declares a variable to store the message.

if (subject === "dsa" && grade >= 80) {
  registrarMessage = "You may enroll in Application Development";
} else if (subject === "math101" && grade >= 80) { // Corrected condition
  registrarMessage = "You may enroll in Calculus";
} else {
  registrarMessage = "You do not meet the requirements for either course. Check prerequisites.";
}

console.log(registrarMessage); // Displays the enrollment message.


// 1.A. Check voter registration eligibility based on age
let age2 = parseInt(prompt("Enter your age: ")); // Prompts for age and converts to an integer.
// Uses a ternary operator for a concise eligibility check.
console.log(age2 >= 18 ? "You may now register as a voter for Elections 2025" : "You are too young to register as a voter for Elections 2025");


// 2.B. Determine course enrollment based on general average
let genAverage2 = parseInt(prompt("Enter your General Average: ")); // Prompts for general average and converts to an integer.
//Simplified the conditional logic to be more efficient and readable.
let courseEnrollmentMessage;
if (genAverage2 >= 85) {
  courseEnrollmentMessage = "You may enroll in all Course Programs";
} else {
  courseEnrollmentMessage = "You may enroll in most Course Programs, but some may have restrictions.";
}

console.log(courseEnrollmentMessage); // Displays the course enrollment message.
console.log("Your general average:", genAverage2); // Displays the entered general average.


// 3.A. Print name repeatedly based on name length
let fname = "Jose Cruz"; // Name to be printed repeatedly.
// Uses a for loop, which is more efficient and readable than a while loop in this case.
for (let i = 0; i < fname.length; i++) {
  console.log(fname); // Prints the name.
  console.log("Iterations Name was Printed:", i + 1); // Prints the iteration number (starting from 1).
}