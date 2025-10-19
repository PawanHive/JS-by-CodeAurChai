
/*
| Feature            | **Function**                                          | **Constructor Function**                               |
| ------------------ | ----------------------------------------------------- | ------------------------------------------------------ |
| **Purpose**        | Used to perform a task or return a value              | Used to create (construct) objects                     |
| **Name Style**     | Usually starts with lowercase                         | Usually starts with **Capital letter** (by convention) |
| **Called with**    | Just the name → `greet()`                             | Called using **`new` keyword** → `new Person()`        |
| **Return Value**   | Returns what you specify (or `undefined`)             | Automatically returns a new object                     |
| **`this` keyword** | Refers to global object (or undefined in strict mode) | Refers to the **new object being created**             |
| **Used for**       | Normal reusable code                                  | Object templates / blueprints                          |
*/

//🧠 Example:

//----------------------------------------- Normal Function ----------------------------------------------

// Normal function
function greet() {                      //remember normal function name usually start with SMALL LETTER.
  console.log("Hello!");
}
greet();   // just runs code

//---------------------------------------- Constructor Function ---------------------------------------------

// Constructor function
function Person(name) {                 //remember constructor function name usually start with CAPITAL LETTER.
  this.name = name;
}
const user1 = new Person("Abhishek");  // creates new object
console.log(user1.name); // "Abhishek"


/*
💬 In short:

🔹 A function just performs an action.
🔹 A constructor function is used to create new objects (instances) with the help of the new keyword.
*/