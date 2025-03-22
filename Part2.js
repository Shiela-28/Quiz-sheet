//Part II. Code Snippet
//Complete the code snippet down below. The purpose of the source code is to register in the platform with Username and Password, then allows the newly registered user to Login.

let registeredUsername;
let registeredPassword;
let reEnteredPassword;

registeredUsername = prompt("Register your Username:"); // Declare a var that will hold the uname, use a user input method
registeredPassword = prompt("Register your passcode:"); // Declare a var that will hold the pword, use a user input method
reEnteredPassword = prompt("Re-enter your passcode:"); // Declare a variable that will hold the re-pword, use a user input method


if (registeredPassword === reEnteredPassword) { // Compare the Registered Password and Re-entered Password
    let loginUsername;
    let loginPassword;

    loginUsername = prompt("Username:"); // Declare a variable that will hold the uname on Login
    loginPassword = prompt("Password:"); // If correct uname, declare a var that will hold the encoded password on Login

    if (loginUsername === registeredUsername && loginPassword === registeredPassword) { // Compare the registered pword and entered pword on Login
        alert("Welcome to DSA, " + loginUsername); // Window Pop-up to Congratulate the user for successful Login.
    } else if (loginUsername !== registeredUsername) {
        alert("Incorrect Username, Re-run the code!"); // Window Pop-up to inform the user of the incorrect username
    } else {
        alert("Incorrect Password, Re-run the code!"); // Window Pop-up to inform the user of the incorrect passcode
    }
} else {
    alert("Password does not Match, Re-run the code!"); // Window Pop-up to inform the regpCode and re-entered pCode does not match