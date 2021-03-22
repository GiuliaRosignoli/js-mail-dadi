/**
 * 1st Task
 * Ask the user for their email address and make sure it is in your database
 * - Question (prompt)
 * Array containing email addresses I already have
 * Loop - run a check each time with a different value
 */



                // 1ST TASK 

// 1st step

var emailAddress = prompt("Insert your email address");
emailAddress = emailAddress.toLowerCase();
console.log("My email address is: ", emailAddress);

// 2nd step - Array

var emailAddressDatabase = ["giuliarosignoli@gmail.com", "chiaracorradini@gmail.com", "eliarossi@fastweb.it", "carlobianchi@tiscali.it"];
 console.log(emailAddressDatabase);
 

// 3rd step - Loop

var userFound = false;

for (var i = 0; i < emailAddressDatabase.length; i++) {
    console.log("loop: " + i );

    if(emailAddressDatabase[i] === emailAddress) {
        console.log(emailAddressDatabase[i]);
        userFound = true;
    }
}


// 4th step Condition

if(userFound === true) {
    console.log("You can access the platform");
    document.getElementById("email-address").innerHTML = "You can access the platform";

} else {
    console.log("Sorry, you are not allowed to access this page");
    document.getElementById("email-address").innerHTML = "Sorry, you are not allowed to access this page";
}



      /*     2ND TASK

 Generating random numbers 1 to 6 - user / computer
 The biggest one wins

userNumber - random number
computerNumber - random number

if userNumber is bigger than computerNumber, it wins. */



// Random numbers

var userNumber = Math.floor(Math.random()* 6 + 1 );
console.log("Your number is ", userNumber);

var computerNumber = Math.floor(Math.random() * 6 + 1 );
console.log("The PC number is ", computerNumber);

// Condition

if(userNumber > computerNumber) {
    alert("you win");
    document.getElementById("game").innerHTML = "You Win!!!";

} else if(userNumber === computerNumber) {
     alert("we're even");
     document.getElementById("game").innerHTML = "We're even. Let's play again";

} else {
    alert("you lose");
    document.getElementById("game").innerHTML = "You Lose :(";

}