//+++++++++++++++++++++++++++++++++++++++++ WHAT .bind() DOES ++++++++++++++++++++++++++++++++++
/*
🔹 1. What .bind() Does
    ==> bind() is a method of functions in JavaScript.
    👉 It creates a new function that has a fixed (bound) value of this.

In simple words:
    .bind() lets you control what this refers to inside a function — no matter where or how you call it. 
*/

//+++++++++++++++++++++++++++++++++++++++++ WHY .bind() IS NEEDED ++++++++++++++++++++++++++++++++++

/*
🔹 2. Why .bind() Is Needed
In JavaScript, this changes depending on how a function is called, not where it’s defined.

That causes confusion when a function:
    ==> is passed around as a callback, or
    ==> is used inside event handlers or setTimeout, etc.
.bind() solves this by locking this to a specific object. 
*/

//EXAMPLE:

const user = {
  username: "Abhishek",
  greet() {
    console.log(`Hello, ${this.username}`);
  }
};
    // wrong
setTimeout(user.greet, 1000);       //output: Hello, undefined
    /*
    not working because,
        When setTimeout runs the function later, it calls it without any object,
        so inside the function, this becomes undefined (in strict mode).
    */

    // correct
setTimeout(user.greet.bind(user), 1000);        //output: Hello, Abhishek
    /*
    worked because, 
        Now, this inside greet will always refer to user,
        no matter who calls it or when.
    */