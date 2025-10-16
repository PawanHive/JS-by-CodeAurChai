//+++++++++++++++++++++++++++++++ Classes in JavaScript +++++++++++++++++++++++++++++++++++++++++++++++

//1️⃣ What is a Class in JavaScript?
/*
    ==> A class is a blueprint for creating objects.
    ==> Think of a class as a template, and objects are instances made from it.
    ==> Introduced in ES6, but under the hood, it still uses prototypes.

Analogy:
    ==> Class → Blueprint of a car
    ==> Object → Your actual car built from the blueprint
*/

//2️⃣ Why Use Classes?
/*
    ==> Organize code better with related properties and methods.
    ==> Reuse code by creating multiple instances (objects) from the same class.
    ==> Makes it easier to understand and maintain complex code.
*/

//3️⃣ Summary of Class Features:
/*
Feature                 	Purpose

constructor() ==>     Initialize object
methods ==>          Functions for instances
extends	==>          Inherit from another class
super()	==>          Call parent constructor
static	==>          Methods for class itself, not instances
get / set ==>        Custom property accessors
#privateFields ==>    Private properties
*/
 
// EXAMPLE: 

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword() {                                 // created METHOD in class  //REMEMBER: declared inside class
//     return `${this.password}abc`
// }

//     changeUsername() {                                  // created METHOD in class  //REMEMBER: declared inside class
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User('chai', 'chai@gmail.com', '123')

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene of above code:

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}


const chai1 = new User('chai', 'chai@gmail.com', '123')

console.log(chai1.encryptPassword());
console.log(chai1.changeUsername());