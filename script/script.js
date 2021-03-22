/**
 * 1st Task
 * Ask the user for his email address and make sure it is in your database
 * - Question (prompt)
 * Array containing email addresses I already have
 * Loop - run a check each time with a different value
 */


                // 1ST TASK 

// 1st step

var emailAddress = prompt("Insert your email address");
emailAddress = emailAddress.toLowerCase;
console.log("My email address is: ", emailAddress);

// 2nd step - Array

var emailAddressDatabase = ["giuliarosignoli@gmail.com", "chiaracorradini@gmail.com", "eliarossi@fastweb.it", "carlobianchi@tiscali.it"];
 console.log(emailAddressDatabase);

// 3rd step - Loop

for (var i = 0; i < emailAddressDatabase.length; i++){
    console.log("loop: " + i );
}

// 4th step Condition
var userFound = false

if(emailAddressDatabase[1] === emailAddress) {
    console.log(emailAddressDatabase[i]);
    userFound = true;
}

if(userFound === true) {
    console.log("You can access the platform");
} else {
    console.log("Sorry, you are not allowed to access this page");
}






          // 2ND TASK

/** Generating random numbers 1 to 6 - user / computer
 The biggest one wins

userNumber - random number
computerNumber - random number

if userNumber is biggest than computerNumber, it wins. */


var userNumber = Math.floor(Math.random()*10 );
console.log("The number is ", userNumber);

var computerNumber = Math.floor(Math.random)*10 );
console.log("The number is ", computerNumber);


/* function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
*/

if(userNumber > 6) {
    userNumber = 
}