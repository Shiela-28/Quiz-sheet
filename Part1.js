//Part I. code transformations
//1.A.  Get age and average, check eligibility for BSCS program
let age = parseInt(prompt("Enter your age: ")); 
let genAverage = parseInt(prompt("Enter your genAverage: "));
let collegeBSCS = (age >= 18 && genAverage >= 83) ? "You may enter College, under BSCS Program": "Both conditions may have not met and not allowed to enroll";
console.log(collegeBSCS);

//2.B. Get subject and grade, determine enrollment options
let subject = prompt("Enter your Subject: ") 
let grade = parseInt(prompt("Enter your grade: ")) 

let registrar = (subject === "DSA" && grade >= 80)?
   "You may enroll Application Development":
   (subject === "Math101" && grade <= 80)? //Note: This line has a syntax error.  It should be grade >= 80 or similar.
   "You may enroll Calculus" :
   "You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus"; 
console.log(registrar);

//1.A. Check voter registration eligibility based on age
let age2 = parseInt(prompt("Enter your age: ")); 
if(age2 >= 18){
   console.log("You may now Register as a Voter for Elections 2025");
}else{
   console.log("You are too young register as a voter for Elections 2025"); //Corrected the missing output
}

//2.B. Determine course enrollment based on general average
let genAverage2 = parseInt(prompt("Enter your General Average: "))
if(genAverage2 >= 85){
   console.log("You may enroll in all Course Programs");
}else if(genAverage2 < 85 && genAverage2 > 82){ //Corrected variable name
   console.log("You may enroll in any Course Program except in CTE, SCJE, CHS");
}else{
   console.log("You may enroll in any Course Program except CTE, SCJE, CHS, CCS");
}
console.log(genAverage2)

//3.A. Print name repeatedly based on name length
let fname = "Jose Cruz";
let i = 0;

while (fname.length > i) { //Loop until i exceeds name length
  let c = 2 + i;
  let nLengthCounterTwo = fname.length - c; //This variable is unused
  console.log(fname); 
  console.log("Iterations Name was Printed: " + i);
  i++; 
}