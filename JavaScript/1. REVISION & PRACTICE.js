// for (let i = 10; i <= 20; i++) {
//     if (i == 15) {
//         console.log(`15 detected`)
//     }
//     const element = i;
//     console.log(element)
    
// }

// const letArr = ['bat', 'ball']
// for (let i = 0; i < letArr.length; i++) {
//     const element = i;                      //print (keys) only
//     const element1 = letArr[i]              //print (values)
//    // console.log(element)
//     //console.log(element1)    
//     console.log(`${i} index of ${letArr[i]}`)               
// }

// const myObj = {
//     name: 'pawan',
//     surname: 'yadav'
// }
// for (let i = 0; i < Object.keys(myObj).length; i++) {
//     const element = i;
//     console.log(i)

//     const element1 = Object.values(myObj)
//     console.log(element1)
// }

// const user = {
//   name: "Pawan",
//   age: 22,
//   city: "Varanasi"
// };

// for (const key in user) {
//   console.log(key, ":", user[key]);
// }

// const coding = [ 'js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach((item) => {
//     console.log(item);
// })
// const coding1 = [ 'js', 'ruby', '', 'python', 'cpp']

// const code = coding1.forEach((item) => {             
//     //console.log(item);
//     return item                             
// });
// console.log(code)

// const myNums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// // const newNums3 = myNums3.forEach( (num) => {
// //     if (num > 7) {
// //         newNums3.push(num)
// //     }
// // })      
// // console.log(newNums3)

// const user = {
//     username: "Pawan", 
//     price: 199
// function handleObject(anyobject) {
//    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`)       //REMEMBER/SYNTAX**
//     console.log(`Username is ${this.username} and price is ${this.price}.`)       //REMEMBER/SYNTAX**
// }

// }

// function handleObject(anyobject) {
//    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`)       //REMEMBER/SYNTAX**
//     console.log(`Username is ${this.username} and price is ${this.price}.`)       //REMEMBER/SYNTAX**
// }
// handleObject(user)
//---------------------------------------------------------------------------

// class User {
//     constructor(username) {
//         this.username = username;
//     }

//     logMe() {
//         console.log(`USERNAME is ${this.username}`);
//     }
    
// }

// class Teacher extends User {                // REMEMBER/SYNTAX  // (extends) use to inherit // (Teacher) class inherited from (User) class, means (Teacher) class can access value and methods of (User) class
//     constructor(username, email, password) {
//         super(username)                     // super() is used to call the constructor of the parent class (User class here)
//         this.email = email;
//         this.password = password;
//     }

//     addCourse() {
//         console.log(`A new course was added by ${this.username}`)
//     }
// }          

// const user1 = new Teacher('pawan', 'chai@gmail.com', '123');      // creating instance of Teacher class
// const user2  = new User('sonu');

// //user1.addCourse()          // output: A new course was added by chai

// user2.addCourse()          // throws error because addCourse() method is not present in User class, because (User) class is parent class and (Teacher) class is child class
// //user2.logMe()

//--------------------------------------------------------------------------------------

// const user = {
//   username: "Abhishek",
//   greet() {
//     console.log(`Hello, ${this.username}`);
//   }
// };

//setTimeout(user.greet, 2000);       //output: Hello, undefined


// const button = document.querySelector("button");

// const person = {
//   name: "Pawan",
//   sayHi() {
//     console.log(`Hi, ${this.name}`);
//   }
// };

// // Without bind
// button.addEventListener("click", person.sayHi); // ❌ this = button, not person

// // Fix with bind
// button.addEventListener("click", person.sayHi.bind(person)); // ✅ Hi, Pawan

//-------------------------------------------------------------------------------------

const user = {};

Object.defineProperty(user, "name", {
  value: "Abhishek",
  writable: false,   // ❌ cannot be changed
  enumerable: true,  // ✅ will appear in loops like for...in
  configurable: false // ❌ cannot be deleted or redefined
});

console.log(user.name);   // "Abhishek"

user.name = "Pawan";      // ❌ will not change because writable: false
console.log(user.name);   // still "Abhishek"