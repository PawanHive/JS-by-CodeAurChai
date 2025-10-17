class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    // getter & setter for email:
    get email() {                               // REMEMBER/SYNTAX  //here (email) name should be same like the constructor blueprint
        return this._email.toUpperCase()        // but here, (_) before the same name or property like in constructor blueprint        
    }

    set email(value) {                          //  IN SETTER: here (value) should be as parameter
        this._email = value;                    // here (value) should be as a value
    }

    //getter & setter for password:
    get password() {
        return this._password.toUpperCase()     // what user get is (ABC)
    }

    set password(value) {
        this._password = value                  // REMEMBER: setter ko (return) nahi karte kabhi bhi  // actual value assigned is (abc)
    }
}

const hitesh = new User('h@hitesh.ai', 'abc')

console.log(hitesh.email)
console.log(hitesh.password)

//--------------------------------------------------------------------------------------------------------------------------------

//HOW (getter) & (setter) DEFINED PROPERTY IN THE (older code):

function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value;
        }
    })

    

}
const chai = new User('chai@gmail.com', 'chai@123');

console.log(chai.email)
console.log(chai.password)

//-------------------------------------------------------------------------------------------------------------------

//OBJECT BASED GETTER & SETTER:     // very rarely used syntax.

const User = {
    _email: 'h@hc.com', 
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)                 // this is factory function
console.log(tea.email)

//-------------------------------------- GETTER & SETTER from ChatGPT ----------------------------------------------

/*
🧠 1. What are Getters and Setters?
    ==> They are special methods that allow you to control access to an object’s properties.

    ==> They look like normal properties when you use them,
    ==> but actually they run functions in the background.
*/


/*
Getter: Function that runs when you read a property
Setter: Function that runs when you assign to a property

Use Case: Hide internal data, validate input, or modify output
*/

const user = {
  firstName: "Abhishek",
  lastName: "Yadav",

  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // setter
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(user.fullName);   // getter runs → "Abhishek Yadav"

user.fullName = "Pavan Kumar";  // setter runs
console.log(user.firstName);    // "Pavan"
console.log(user.lastName);     // "Kumar"

/*
    ==> You used user.fullName like a property, not a function.
    ==> But internally, JS ran your getter or setter functions.
*/