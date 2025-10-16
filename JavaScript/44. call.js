

function setUserName(username) {
    //Complex DB calls
    this.username = username; 
    console.log('Called');
}

function createUser(username, email, password) {
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@fb.com', '123')
console.log(chai);


// +++++++++++++++++++++++++++++++ same above code her but explain, comment in code  +++++++++++++++++++++++++++++++++++++++++++++++

// This function sets the username for an object
function setUserName(username) {
    // Imagine this is a complex operation like saving to a DB
    this.username = username;   // 'this' will point to the object that calls this function
    console.log('Called');      // Just to show the function ran
}

// Constructor function to create a new user object
function createUser(username, email, password) {

    // .call(this, username) borrows the setUserName function.
    // Here, this refers to the new object being created (the one created by new createUser()).
    // So setUserName sets this.username on that new object.
    // Then we add email and password directly to this.
    setUserName.call(this, username);

    // Set additional properties directly on the new object
    this.email = email;
    this.password = password;
}

// Create a new user object using the constructor function
const chai1 = new createUser('chai', 'chai@fb.com', '123');

// Log the created object to see all its properties
console.log(chai1);

/* 
Output:
Called
createUser { 
  username: 'chai',             // set by setUserName.call(this, username)
  email: 'chai@fb.com',         // set directly in createUser
  password: '123'               // set directly in createUser
}
*/


//----------------------------------------------------------------------------------------------------------------------

//🧠 1. Purpose of .call()
/*
    .call() is a function method in JavaScript that allows you to:
    ==> Explicitly set the this value inside a function.
    ==> Call a function immediately with arguments you pass.
    In simple words:
        .call() lets a function “borrow” its behavior for another object.
*/

//⚡ 2. Why we use .call()
/*
    ==> In JavaScript, this depends on how a function is called, which can sometimes lead to unexpected results.
    ==> .call() solves this by forcing this to point to the object you want.
    ==> It allows function reuse instead of duplicating code.
*/

//🐾 3. Where .call() is used

                //Function Borrowing / Reuse

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

function greet(city) {
  console.log(`Hello, I am ${this.name} from ${city}`);
}

greet.call(person1, 'Delhi'); // Hello, I am Alice from Delhi
greet.call(person2, 'Mumbai'); // Hello, I am Bob from Mumbai


                //Inheritance (Constructor function)

function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name); // inherit name from Animal
  this.breed = breed;
}

const dog1 = new Dog('Tommy', 'Labrador');
console.log(dog1); // { name: 'Tommy', breed: 'Labrador' }

    //✅ .call() allows child constructor to reuse parent constructor.