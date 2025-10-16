 //+++++++++ static properties and methods +++++++++++++++++++++++++++++++++++++++++++++++
/*
🧠 static means:

The property or method belongs to the class itself, not to any individual object (instance).
So, you can call a static method using the class name, but not using an object.
*/

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is: ${this.username}`);
    }

    static createdId() {                                            // now this can't be called by object, only by class name
        return this.username + Math.floor(Math.random() * 1000);    // suppose this will just create  a random id
    }
}

const user1 = new User('hitesh');

//  This will give an error:
//console.log(user1.createdId())   //  TypeError: user1.createId is not a function

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const user2 = new Teacher ('pawan', 'pawan@gmail.com')

user2.logMe(); // output: USERNAME is: pawan
console.log(user2.createdId());      //output: TypeError: user2.createdId is not a function

console.log(Teacher.createdId(user2.username));  // correct way to call static method


//++++++++++++++++++++ same above code with best comment +++++++++++++++++++++++++++++++++++++++++

// 🧱 Parent class: User
class User {
    constructor(username) {
        // Assign username to the instance
        this.username = username;
    }

    // Instance method (available for each object)
    logMe() {
        console.log(`USERNAME is: ${this.username}`);
    }

    // Static method (belongs to the class itself, not instances)
    static createdId() {
        // 'this' refers to the class (User), not an object instance
        // So 'this.username' is undefined when called as User.createdId()
        // This will result in 'undefined' + number = NaN
        return this.username + Math.floor(Math.random() * 1000);
    }
}

// 🧪 Creating an instance (object) of User class
const user3 = new User('hitesh');

// ❌ This will throw an error because static methods cannot be called on instances
// console.log(user1.createdId());   // TypeError: user1.createdId is not a function

// ✅ Correct way: static methods are called using the class name
console.log(User.createdId());      // Output: NaN (since 'this.username' is undefined)


// 🧱 Child class: Teacher (inherits from User)
class Teacher extends User {
    constructor(username, email) {
        // super() calls the parent class constructor
        super(username);
        this.email = email;
    }
}

// 🧪 Creating an instance of the child class
const user4 = new Teacher('pawan', 'pawan@gmail.com');

// ✅ Works fine — because logMe() is an instance method inherited from User
user2.logMe();  // Output: USERNAME is: pawan

// ❌ Throws error — because createdId() is a static method, not available to instances
console.log(user2.createdId());  // TypeError: user2.createdId is not a function
