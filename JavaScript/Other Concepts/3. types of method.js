//+++++++++++++++++++++++++++++++++++++++ Type of Methods in js ++++++++++++++++++++++++++++++++++++

//----------------------------------------- Instance Methods ----------------------------------------
//🧩 1. Instance Methods:
/*
Methods defined inside an object or class, used by an instance (object).
*/

class User {
  greet() { console.log("Hello!"); }   // instance method
}
const u = new User();
u.greet(); // ✅ works on the instance

//---------------------------------------- Static Methods ---------------------------------------------------

//⚙️ 2. Static Methods
/*
Belong to the class itself, not its objects.
*/

class User {
  static createId() { return Math.random(); }
}
User.createId(); // ✅ called by class, not instance

//------------------------------------------ Prototype Methods -------------------------------------------------

//🧱 3. Prototype Methods
/*
Defined on the prototype, shared by all instances.
*/

function User() {}
User.prototype.sayHi = function() { console.log("Hi!"); };

//------------------------------------- Built-in (predefined) methods -----------------------------------------------


//🌐 4. Built-in (Predefined) Methods
/*
JavaScript’s own ready-made methods.
*/
//Examples:

String: "abc".toUpperCase()
Array: [1,2,3].push(4)
Object: Object.keys(obj)

