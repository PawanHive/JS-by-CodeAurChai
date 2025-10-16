// ++++++ here we will learn difference between FUNCTION REFERENCE & FUNCTION CALL(calling a function) & CALLBACK FUNCTION: ++++++++++ 

// -------------------------------------- FUNCTION REFERENCE: ---------------------------------------------

//A function reference is simply the function itself, stored in a variable or passed around without executing it.

function greet() {
    console.log("hello");
    return
}
const greetFn = greet           // this (greet) is a function reference

/*
    ==> Here, greetFn stores the function itself.
    ==> ✅ You are not calling the function yet.
    ==> You can pass it around, store it in a variable, or bind it later.
*/

//---------------------------------- FUNCTION CALL(calling a function) -----------------------------------------

function greet() {
    console.log("hello hello");
    return
}
greet()

/*
    ==> Parentheses () execute the function immediately.
    ==> Whatever the function returns becomes the value
    ==> If greet() doesn’t return anything, it returns undefined.
*/

//------------------------------------ CALLBACK FUNCTION --------------------------------- 

/*
    ==> A callback function is a function reference passed as an argument to another function to be executed later.

    ==> Every callback starts as a function reference, but the receiving function decides when and how to execute it.
*/

function greet() {
  console.log("Hello after 2 seconds");
}

setTimeout(greet, 2000);  // greet is a callback

/*
    ==> greet is not called immediately, only after 2 seconds.
    ==> If you wrote setTimeout(greet(), 2000);, it would run immediately and pass undefined to setTimeout.
*/