class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
    
}

class Teacher extends User {                // REMEMBER/SYNTAX  // (extends) use to inherit // (Teacher) class inherited from (User) class, means (Teacher) class can access value and methods of (User) class
    constructor(username, email, password) {
        super(username)                     // super() is used to call the constructor of the parent class (User class here)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}          

const user1 = new Teacher('pawan', 'chai@gmail.com', '123');      // creating instance of Teacher class
const user2  = new User('sonu');

user1.addCourse()          // output: A new course was added by chai

//user2.addCourse()          // throws error because addCourse() method is not present in User class, because (User) class is parent class and (Teacher) class is child class
user2.logMe()              // output: USERNAME is sonu  // logMe() method is present in User class

console.log(user1 === user2);        // false because both are different objects
console.log(user1 === Teacher);   // false because both are different objects
console.log(user1 instanceof Teacher); // true because user1 is instance of Teacher class
console.log(user1 instanceof User);    // true because Teacher class inherited from User class, means user1 can access all the properties and methods of User class


