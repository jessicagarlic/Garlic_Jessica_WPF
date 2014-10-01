/*
WPF Day 4
Prompting For Information
*/

//Ask user for input
//prompt();
/*
var Name = prompt("what is your name?");

console.log(Name);
alert(Name);

//calculate the area of a rectangle
*/
var width = prompt("What is the width of your room?");
//variable set for the width of a room. prompt user for the with
var height = prompt("What is the height of your room?");
//
var area = width*height;

var subractRoom = width-height;

var addRoom = Number(width)+Number(height);

var test = parseInt("40.123 inches");
console.log(test);

console.log(area);
alert(area);


var areaCode = prompt("What is your area code?");
var phoneNumber = prompt("what is your phone number without area code?");

var wholePhoneNumber = String(areaCode) + String(phoneNumber);
