/*
WPF Day 4
Casting Variables
*/

//Casting Variables means treating one variable like another
var stringVar = "6";
var result = 7+ stringVar;
console.log(result);


// Number()  - treat whats inside like a number
var castingResult = 7+ Number(stringVar);
console.log(result);


//Casting Numbers as a string
var areaCode = 407;
var firstPart = 203;
var secondPart=4529;

var phoneNumber = areaCode+firstPart+secondPart;
console.log(phoneNumber);


var phoneNumber = String(areaCode)+String(firstPart)+String(secondPart);
var phoneNumber = "("+String(areaCode)+")"+String(firstPart)+"-"+String(secondPart);
console.log(phoneNumber);


//Parsing Integer
//parseInt() function parses a string and returns an integer
//Only the first number in the string is returned!
//Leading and trailing spaces are allowed.
//If the first character cannot be converted to a number, parseInt() returns NaN.

var a = parseInt("40 years");
console.log(a);
var b = parseInt("He was 40");
console.log(b);


//Prompting
//Prompts only return strings

var cupsHad = prompt("How many cups do you have?");
var cupsBought = prompt("How many cup are you going to buy?");

//var totalCups = cupsHad + cupsBought;
var totalCups = Number(cupsHad) + parseInt(cupsBought);


//Could also wrap the intial prompt in it
var cupsHad = NUmber(prompt("How many cups do you have?"));

console.log(totalCups);
