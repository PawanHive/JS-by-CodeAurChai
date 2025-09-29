"use strict"; // treat all JS code as newer version

// alert (3 + 3) // this will not print because we are using nodejs, not browser

console.log(3
    +
    3); // this will print but not good to write code (code readability should be high)

console.log('Pawan');

let name = "hitesh"
let age = 18 
let isLoggedIn = false
let state; // this is undefined data type

/*
List of DATATYPE is in below:

number => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value
undefined => means value is not defined there
Symbol => unique

*/

console.log(typeof "pawan")      //   result: string 
console.log(typeof age)          //   result: number
console.log(typeof null)         //   result: object    // remember this (null) is object.
console.log(typeof undefined)    //   result: undefined