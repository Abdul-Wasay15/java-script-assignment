// chapter 9 to 11  

// Question 1

var city = prompt("enter your city name:");
if (city === "karachi"){
    alert("welcome to the city of light");
}

// Question 2

var gender = prompt("Enter your gender (male/female):");

if (gender === "male") {
    alert("Good Morning Sir.");
}
else if (gender === "female") {
    alert("Good Morning Ma’am.");
}

// Question 3

var color = prompt("Enter traffic signal color (Red, Yellow, Green):");

if (color === "Red") {
    alert("Must Stop");
}
else if (color === "Yellow") {
    alert("Ready to move");
}
else if (color === "Green") {
    alert("Move now");
}

// Question 4

var fuel = prompt("Enter remaining fuel in litres:");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Question 5

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){ alert("condition 1 is true"); }   // false
if (c === 13){ alert("condition 2 is true"); }     // true
if (++c < 14){ alert("condition 3 is true"); }     // false
if (c === 14){ alert("condition 4 is true"); }     // true
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true){ alert("True"); }
if (false){ alert("False"); }
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Question 6

var sub1 = +prompt("Enter marks of subject 1:");
var sub2 = +prompt("Enter marks of subject 2:");
var sub3 = +prompt("Enter marks of subject 3:");
var totalMarks = +prompt("Enter total marks:");

var obtained = sub1 + sub2 + sub3;
var percent = (obtained / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtained + "<br>");
document.write("Percentage: " + percent + "%<br>");

if (percent >= 80) {
    document.write("Grade: A-one<br>Remarks: Excellent");
}
else if (percent >= 70) {
    document.write("Grade: A<br>Remarks: Good");
}
else if (percent >= 60) {
    document.write("Grade: B<br>Remarks: You need to improve");
}
else {
    document.write("Grade: Fail<br>Remarks: Sorry");
}

// Question 7

var secret = 7;  // 1 to 10
var guess = +prompt("Guess the secret number (1 to 10):");

if (guess === secret) {
    alert("Bingo! Correct answer");
}
else if (guess + 1 === secret) {
    alert("Close enough to the correct answer");
}

// Question 8

var num = +prompt("Enter a number:");

if (num % 3 === 0) {
    alert("The number is divisible by 3");
}

// Question 9

var num = +prompt("Enter a number:");

if (num % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}

// Question 10

var T = +prompt("Enter temperature:");

if (T > 40) {
    alert("It is too hot outside.");
}
else if (T > 30) {
    alert("The Weather today is Normal.");
}
else if (T > 20) {
    alert("Today’s Weather is cool.");
}
else if (T > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

// chapter 12 to 13

// Question 1

var char = prompt("Enter a character:");

var code = char.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("You entered a NUMBER");
}
else if (code >= 65 && code <= 90) {
    alert("You entered an UPPERCASE LETTER");
}
else if (code >= 97 && code <= 122) {
    alert("You entered a LOWERCASE LETTER");
}
else {
    alert("Other character");
}

// Question 2

var a = +prompt("Enter first number:");
var b = +prompt("Enter second number:");

if (a > b) {
    alert(a + " is larger");
}
else if (b > a) {
    alert(b + " is larger");
}
else {
    alert("Both numbers are equal");
}

// Question 3

var num = +prompt("Enter a number:");

if (num > 0) {
    alert("Positive number");
}
else if (num < 0) {
    alert("Negative number");
}
else {
    alert("Zero");
}

// Question 4

var ch = prompt("Enter a single character:");

ch = ch.toLowerCase();

if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    alert(true);
} else {
    alert(false);
}

// Question 5

var correctPassword = "abc123";
var userPassword = prompt("Enter your password:");

if (userPassword === "") {
    alert("Please enter your password");
}
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}

// Question 6

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// Question 7

var time = +prompt("Enter time in 24-hour format (e.g., 1900):");

if (time >= 0000 && time < 1200) {
    alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}
else {
    alert("Invalid time format");
}
