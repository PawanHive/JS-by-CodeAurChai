// ++++++++++++ Stack & Heap +++++++++++++++

// Stack is a region of memory to store primitive values
// Heap is a region of memory to store non-primitive value 

let myYoutubeName = "ThePawanPost"

let anotherName = myYoutubeName
anotherName = "PawanHive"


console.log(myYoutubeName) // this will store in stack region of memory
console.log(anotherName) // this will store in stack region of memory

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)  //Output: hitesh@google.com
console.log(userTwo.email)  //Output: hitesh@google.com //(it means userTwo get reference(non-primitive) of memory from userOne)