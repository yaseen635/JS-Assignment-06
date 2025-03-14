// STRING METHODS

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("First Name");

var lastName = prompt("Last Name");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "!");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var favoritePhone = prompt("What is your favourate mobile model?");

var phoneNameLength = favoritePhone.length;

document.write("Your favourate mobile models are " + phoneNameLength + " letters.");

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var word = "Pakistani";

var indexOfN = word.indexOf("n");

document.write("The letter 'n' is at index: " + indexOfN);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var word = "Hello World";

var lastIndexL = word.lastIndexOf("l");

document.write("The Letter 'l' of last index: " + lastIndexL);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var word = "Pakistani";

var characterAtIndex3 = word.charAt(3);

document.write("Character is on 3rd index: " + characterAtIndex3);

// 6. Repeat Q1 using string concat() method.

var firstName = prompt("Your First Name");

var lastName = prompt("Your Last Name");

var fullName = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "!");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";

var newCity = city.replace("Hyder", "Islam");

document.write("The new city name is: " + newCity);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";

var newMessage = message.replace(/and/g, "&");

document.write(newMessage);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var stringNumber = "472";

var realNumber = parseInt(stringNumber);

document.write("Text value: " + stringNumber + ", Type: " + typeof stringNumber + "<br>");
document.write("Number value: " + realNumber + ", Type: " + typeof realNumber);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var userInput = prompt("Write anything, I will change letters in capital!");

var capitalInput = userInput.toUpperCase();

document.write("You wrote: " + userInput + "<br>"); 
document.write("In Capital letters: " + capitalInput);

// 11. Write a program that takes user input. Convert and
// show the input in title case.


var userInput = prompt("Write something, i will change in title case!");

function toTitleCase(str) {
  var words = str.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); 
  }
  return words.join(' '); 
}

var titleCaseInput = toTitleCase(userInput);

document.write("You wrote: " + userInput + "<br>");
document.write("In title case: " + titleCaseInput);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;

var numString = num.toString();

var numWithoutDot = numString.replace(".", "");

document.write(numWithoutDot);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var username = prompt("Enter user name (no special symbols like @ . , !)");

var isValid = true; 

for (var i = 0; i < username.length; i++) {
  var charCode = username.charCodeAt(i);

  if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
    isValid = false;
    break; 
  }
}

if (!isValid) {
  alert("Please enter a valid username without special symbols (@ . , !)");
} else {
  alert("Username is valid!");
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("What you want to have? (cake, apple pie, cookie, chips, patties)");

var userInputLower = userInput.toLowerCase();

var found = false; 

for (var i = 0; i < A.length; i++) {
  if (userInputLower === A[i]) {
    found = true; 
    break; 
  }
}

if (found) {
  alert(userInput + " found!");
} else {
  alert("Sorry, " + userInput + "couldn't found.");
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var password = prompt("Enter Password (6 characters minimum, Don't use first character a number");

function isValidPassword(password) {
  if (password.length < 6) { 
    return false;
  }

  if (!isNaN(password.charAt(0))) {
    return false;
  }

  var hasLetter = false;
  var hasNumber = false;

  for (var i = 0; i < password.length; i++) {
    var charCode = password.charCodeAt(i);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) { 
      hasLetter = true;
    } else if (charCode >= 48 && charCode <= 57) {
      hasNumber = true;
    }
  }

  return hasLetter && hasNumber;
}

if (isValidPassword(password)) {
  alert("Password is correct!");
} else {
  alert("Password is not correct. Please enter right password.");
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";

var universityArray = university.split(" "); 

for (var i = 0; i < universityArray.length; i++) {
  document.write(universityArray[i] + "<br>");
}

// 17. Write a program to display the last character of a user
// input.

var userInput = prompt("Type anything, and I'll show you the last letter!");

var lastCharacter = userInput.charAt(userInput.length - 1);

document.write("The last letter you typed was: " + lastCharacter);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";

var lowerSentence = sentence.toLowerCase();

var words = lowerSentence.split(" ");

var count = 0;
for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

document.write("The word 'the' appears " + count + " times.");

// MATH METHODS

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userInput = prompt("Enter a positive number:");

var number = parseFloat(userInput);

if (isNaN(number) || number < 0) {
  alert("Please enter a positive number!");
} else {
  
  var roundOff = Math.round(number);

  var floorValue = Math.floor(number);

  var ceilValue = Math.ceil(number);

  document.write("Number: " + number + "<br>");
  document.write("Round off value: " + roundOff + "<br>");
  document.write("Floor value: " + floorValue + "<br>");
  document.write("Ceil value: " + ceilValue);
}

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userInput = prompt("Enter a negative decimal number:");

var number = parseFloat(userInput);

if (isNaN(number) || number >= 0) {
  alert("Please enter a negative decimal number!");
} else {
  
  var roundOff = Math.round(number);

  var floorValue = Math.floor(number);

  var ceilValue = Math.ceil(number);

  document.write("Number: " + number + "<br>");
  document.write("Round off value: " + roundOff + "<br>");
  document.write("Floor value: " + floorValue + "<br>");
  document.write("Ceil value: " + ceilValue);
}

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var userInput = prompt("Enter a number, I will tell you absolute value of that number!");

var number = parseFloat(userInput);

if (isNaN(number)) {
  alert("Please enter a number!");
} else {
  
  var absoluteValue = Math.abs(number);

  document.write("Absolute value: " + absoluteValue);
}

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var diceRoll = Math.floor(Math.random() * 6) + 1;

document.write("You rolled a: " + diceRoll);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var coinToss = Math.random();

if (coinToss < 0.5) {
  document.write("Heads!");
} else {
  document.write("Tails!");
}

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("Your random number is: " + randomNumber);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var weightInput = prompt("Tell us your weight (Like 50, 50kgs, 50.2kgs, ya 50.2kilograms)");

var weightNumber = parseFloat(weightInput);

if (isNaN(weightNumber)) {
  document.write("Sorry, could not understant.  Please tell me properly.");
} else {
  document.write("Your weight is: " + weightNumber + " kgs");
}

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var secretNumber = Math.floor(Math.random() * 10) + 1;

var guess = prompt("Guess a number between 1 and 10!");

guess = parseInt(guess);

if (guess === secretNumber) {
  alert("Congratulations! You guessed the secret number!");
} else {
  alert("Sorry, that's not the secret number. Try again!");
}

// DATE METHODS

// 1. Write a program that displays current date and time in
// your browser.

var now = new Date();

document.write("Today date and time: " + now);

// 2. Write a program that alerts the current month in words.
// For example December.

var now = new Date();

var monthNumber = now.getMonth();

var monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var currentMonthName = monthNames[monthNumber];

alert("The current month is " + currentMonthName);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var now = new Date();

var dayNumber = now.getDay();

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var currentDayAbbreviation = dayNames[dayNumber];

alert("Today is " + currentDayAbbreviation);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var today = new Date();
var day = today.getDay();

if (day === 6 || day === 0) {
  document.write("It's Fun day!");
} else {
  document.write("It's a weekday.");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var today = new Date();
var date = today.getDate();

if (date < 16) {
  document.write("First fifteen days of the month");
} else {
  document.write("Last days of the month");
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


var myDate = new Date();

var milliseconds = myDate.getTime();

var minutesSince1970 = milliseconds / (1000 * 60);

document.write("Minutes since January 1, 1970: " + minutesSince1970);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var now = new Date();
var hours = now.getHours();

if (hours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate = new Date(2020, 11, 31);

document.write(laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


var ramadanStartDate = new Date(2015, 5, 18);

var today = new Date();

var timeDiff = today.getTime() - ramadanStartDate.getTime();

var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

alert("Days passed since 1st Ramadan 2015: " + daysPassed);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var referenceDate = new Date(0);

var beginning2015 = new Date(2015, 0, 1);

var timeDiff = beginning2015.getTime() - referenceDate.getTime();

var secondsElapsed = timeDiff / 1000;

document.write("Seconds elapsed between January 1, 1970, and January 1, 2015: " + secondsElapsed);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var currentDate = new Date();

var currentHours = currentDate.getHours();

currentDate.setHours(currentHours + 1);

document.write("Date object one hour ahead: " + currentDate);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var currentDate = new Date();

var currentYear = currentDate.getFullYear();

currentDate.setFullYear(currentYear - 100);

alert("Date 100 years ago: " + currentDate);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var age = prompt("Enter your age?");

var currentYear = new Date().getFullYear();

var birthYear = currentYear - parseInt(age);

document.write("Your birth year is: " + birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month

// DATE METHODS | JAVASCRIPT

// Page 5 of 5

// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

var customerName = prompt("Please tell Customer Name?");
var currentMonth = new Date().toLocaleString('default', { month: 'long' }); 

var numberOfUnits = parseFloat(prompt("Quantity of Units?"));
var chargesPerUnit = 15.50; 
var latePaymentSurchargeRate = 0.05; 

var netAmount = numberOfUnits * chargesPerUnit;
netAmount = netAmount.toFixed(2);

var latePaymentSurcharge = netAmount * latePaymentSurchargeRate;
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);

var grossAmount = parseFloat(netAmount) + parseFloat(latePaymentSurcharge);
grossAmount = grossAmount.toFixed(2); 

document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
document.write("<p><strong>Charges per Unit:</strong> " + chargesPerUnit + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmount + "</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmount + "</p>");