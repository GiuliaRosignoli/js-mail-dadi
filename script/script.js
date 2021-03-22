/**
 * 1st Task
 * Ask the user for his email address and make sure it is in your database
 * - Question (prompt)
 * Array containing email addresses I already have
 * Loop - run a check each time with a different value
 */


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
    console.log(emailAddressDatabase[i])
    userFound = true;
}

if(userFound === true) {
    console.log("You can access the platform")
} else {
    console.log("Sorry, you are not allowed to access this page");
}