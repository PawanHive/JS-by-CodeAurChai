// ********* Primitive and Non-Primitive(Reference) Data ******************

// Primitive 7 Datatype list below: Number, Boolean, null, undefined, Symbol, BigInt, 
// Definition: Primitive types are basic, immutable (cannot be changed) data types. They are stored directly in memory (stack) as values.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;
const bigNumber = 646326549653265495n // now this become BigInt number after adding (n) at the end. remember

// how to define symbol Datatype:
const id = Symbol('123')
const anotherId = Symbol('123') // remember these both will never be same
console.log(id === anotherId);


// Non-Primitive(Reference) Datatype list: Arrays, Objects, Functions
// Definition: Reference types are objects that are stored in the heap memory. A variable doesn’t hold the actual object, but a reference (address) to it. 

const heros = ['shaktiman', 'naagraj', 'doga']; // thi is Array

let myObj = {
    name: 'pawan',
    age: 22
}           // this is object

const myFunction = function(){
    console.log('Hello World')
}

// NOTE: non-primitive datatype are mostly (object) and function sometime shows as (function object)


// This was HOMEWork
console.log(typeof score)       // Output: number
console.log(typeof isLoggedIn)  // Output: boolean
console.log(typeof outsideTemp) // Output: object
console.log(typeof useremail)   // Output: undefined
console.log(typeof bigNumber)   // Output: bigint
console.log(typeof id)          // Output: symbol
console.log(typeof heros)       // Output: object
console.log(typeof myObj)       // Output: object
console.log(typeof myFunction)  // Output: function

// QnA JavaScript is Static typed or Dynamic Typed language: Ans- JS is Dynamic Typed language

