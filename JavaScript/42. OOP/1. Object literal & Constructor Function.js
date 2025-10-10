//HERE WE CREATED OBJECT LITERAL:

const user = {
    username: 'Pawan',
    loginCount: 8,
    SignedIn: true,

    getUserDetails: function() {
        console.log('got user detials from database');
        //console.log(`Username: ${username}`);              // Wrong
        //console.log(`Username: ${this.username}`);         // Correct, without (this) it will give (undefined)  
        console.log(this)                                   //it will print whole current context of object
        
    }   
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this)                // output: {}  // it will print empty object {} because (this) here is not inside any object so it will point to global object (window/global) which is empty object {}

//-----------------------------------------------------------------------------------------------------------------------

//NOW SUPPOSE HOW TO CREATE OBJECT LITERAL FOR 1 or 2 USERS THEN ITS OKAY, 
// BUT IF WE HAVE TO CREATE OBJECT LITERAL FOR 100 USERS THEN ITS NOT OPTIMIZED WAY.

const userOne = {
    name: 'Abhishek', 
    greet: function() { console.log(`Hello, ${this.name}`) }
}

const userTwo = {
    name: 'Ravi', 
    greet: function() { console.log(`Hello, ${this.name}`) }
}
        /*
        🧩 Object Literal Creation Explanation:

            user1 and user2 are separate objects created using object literal syntax {}.
            Each object has its own properties (name) and its own method (greet()).
        */


//PROBLEM WITH CREATING OBJECT using OBJECT LITERAL syntax {} is:
        /*
        IF SUPPOSE, we have to create OBJECT for (100) users using OBJECT LITERAL syntax {},
        then its not the optimized way,
        because we have to write same code (name, greet) again and again for (100) times.

        *****IN THAT CASE, we use CONSTRUCTOR FUNCTION or CLASS to create OBJECTS.*****
        */

// --------------------------------------------------------------------------------------------------------------------

//NOW SUPPOSE, WE HAVE TO CREATE OBJECTS FOR (100) USES THEN  USING **(CONSTRUCTOR FUNCTION or CLASS)** IS THE BEST WAY:

// Here we can create OBJECT for multiple users using (CONSTRUCTOR FUNCTION) easily: (here we also learn CONSTRUCTOR FUNCTION):

function User(username, loginCount, isLoggedIn){            //REMEMBER: This function is declared in the Global Execution Context, means any one can access it.
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    //return this;      // REMEMBER: You do not need to use (return this); in a constructor function when you use the (new) keyword  
}                               

const user1 = new User('Hitesh', 12, true);     //REMEMBER: here adding (new) keyword is co
                                                //Without (new), a function runs like a normal function call.
                                                //With (new), that same function behaves like a constructor - it creates a new object automatically. gives new instance...new copy
const user2 = new User('ChaiAurCode', 11, false);                                              
console.log(user1)      //output: User { username: 'Hitesh', loginCount: 12, isLoggedIn: true }
console.log(user2)      //output: User { username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false }
    //...accordingly we can create object for (100) users easily using (CONSTRUCTOR FUNCTION).


        //==> What (new) keyword does internally(4 Steps):-
        /*

        function User(name) {
            this.name = name;
        }

        // 1️⃣ Create an empty object
        let obj = {};

        // 2️⃣ Link it to the constructor’s prototype
        obj.__proto__ = User.prototype;

        // 3️⃣ Bind 'this' to that new object and execute function
        User.call(obj, "Hitesh");

        // 4️⃣ Return the new object automatically
        return obj;

        */
