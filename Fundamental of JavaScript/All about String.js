//You will know all about Strings and what you can do with Strings

//Declare a String - String can be written in both "" & ''
var firstSentence = "Hi there";
var secSentence = 'Welcome to JavaScript!';

/**Escape Sequence
\' Single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
**/
var myStr = "FirstLine\n\t\\Second Line\nThird Line\n";
console.log(myStr);

//Concatenate String
var myName = "And" + "y\n";
console.log(myName);

var sentence = "I come First. ";
sentence += "I come Second\n";
console.log(sentence);

var ourStr = "Hi there! ";
var ourStr1 = ourStr + "Congratulations!\n";
console.log(ourStr1);

//Appending variables to Strings
var ourStr = "Hi there! ";
var ourStr1 = "Congratulations for learning JavaScript!\n";
ourStr += ourStr1;
console.log(ourStr);

//Find length with Strings - ourStr += ourStr1
console.log(ourStr.length);

//Index of the strings - ourStr += ourStr1
console.log(ourStr[0]); //will print H

//String Immutability - cannot be altered but can be change
var s = "Jello"
console.log("\nBefore change: " + s);

var s = "Hello"
console.log("After change: " + s);
