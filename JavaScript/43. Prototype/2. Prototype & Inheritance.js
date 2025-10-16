// HERE WE WILL LEARN HOW TO CREATE OUR OWN FUNCTION METHOD USING PROTOTYPE PROPERTY:

// Challenge: 
/*
we have to create a method whose name would be (trueLength()), and it should return the actual length of all list of string excluding spaces.

let myName = "pawan          "   
let mychannel = "chai          "

console.log(myName.trueLength())      // 5    //NOTE: this kind of outcome should come
console.log(mychannel.trueLength())   // 4

*/

let heros = ['thor', 'spiderman']           // array literal

let heroPower = {                           // object literal
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.pawan = function() {          // creating our own method using Object.prototype  // here we injected method into Object.prototype
    console.log(`pawan is present in all objects`);
}

Array.prototype.heyPawan = function() {          // creating our own method using Array.prototype  // here we injected method into Array.prototype
    console.log(`Array Paway say hello`);
}

        // method created using Object.prototype can access by any one Object, array, function because all are inherited from Object.prototype
heroPower.pawan()                   // works on object literal
heros.pawan()                       // works on array literal

        // method created using Array.prototype can access by only.
//heroPower.heyPawan()           // throws error because heyPawan() method is not present in Object.prototype, because we created method using Array.prototype
heros.heyPawan()               // works because heyPawan() method is present in Array.prototype

// +++++++++++++++++++++++++++++++ prototypal inheritance +++++++++++++++++++++++++++++++++++++++++++++++

/*
🧠 What is Inheritance?

Inheritance means one object (or class) can use the properties and methods of another.
It’s like a child inheriting traits from parents — the child doesn’t have to redefine everything.

In JavaScript, inheritance helps us reuse code and avoid duplication.
*/

const user = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,

    __proto__: TeachingSupport    // TASupport inherited from TeachingSupport means (The TASupport object (or function) is getting all the properties and methods from TeachingSupport.)
}
    // old syntax
Teacher.__proto__ = user    //now (Teacher) can access all the properties of (user) object

    //modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  // REMEMBER/SYNTAX** // now (TeachingSupport) can access all the properties of (Teacher) object

//------------------------------------------------------------------------------------------------------------------

// NOW HERE WE WILL SOLVE OUR CHALLENGE USING PROTOTYPE PROPERTY:

let anotherUsername = 'chaiaurcode      '

String.prototype.trueLength = function() {
    console.log(`${this}`)                                  // chaiaurcode
    console.log(`True lengh is ${this.trim().length}`)
}
anotherUsername.trueLength()
    // now trueLength() method is available to all string
'pawan'.trueLength()
'hitesh'.trueLength()
'    sonu    '.trueLength()
'    monu    '.trueLength()