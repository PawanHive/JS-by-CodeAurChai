

function multipleBy5(num) {
    this.num = num;
    return num * 5;
}
multipleBy5.power = 2;

console.log(multipleBy5(5)); // 25
console.log(multipleBy5.power); // 2
console.log(multipleBy5.prototype); // {} because every function has a prototype property


//---------------------------------------------------------------------------------------------

// HERE CREATING OUR OWN FUNCTION METHOD(also know as Prototype Method) USING PROTOTYPE PROPERTY:
function createUser(username, score) {                  // CONSTRUCTOR Function
    this.username = username;
    this.score = score; 
}
createUser.prototype.increment = function() {           // METHOD  // created increment() method using prototype property
    this.score++
}

createUser.prototype.printMe = function() {             // METHOD  // created by own, printMe() method using prototype property
    console.log(`score of ${this.username} is ${this.score}`)
}

const user3 = new createUser('sonu', 25);             // adding (new) keyword here is very important // Creating instances (objects) using the 'new' keyword
const user4 = new createUser('monu', 250)             // adding (new) keyword here is very important // Creating instances (objects) using the 'new' keyword

    //print for user3 data.
user3.printMe()     // output: score of sonu is 25
user3.increment()       // increases score from 25 → 26 
user3.printMe()     // output:  score of sonu is 26

    //print for user4 data.
user4.printMe()     // output: score of monu is 250
user4.increment()       // increases score from 250 → 251 
user4.printMe()     // output:  score of monu is 251    

     // Above code Explanation:
     /*
    increament() and printMe() both methods are added using createUser.prototype.
    This means every object created using new createUser() will automatically have access to these methods — without storing separate copies in memory.

    💡 So both user3 and user4 share the same increment() and printMe() methods.
     */