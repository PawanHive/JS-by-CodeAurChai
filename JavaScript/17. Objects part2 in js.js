/*
1). Singleton (in JavaScript literals case)
   When you use literals (100, "hello", true), JavaScript reuses the same memory reference.
   That’s why they behave like singleton values.
   Example:
const a = "hello";
const b = "hello";
console.log(a === b); // true ✅ same literal reused


2). Non-Singleton (with new keyword):

   When you use new Number(), new String(), new Object(), etc., JavaScript creates a new object every time, even if the contents are the same.
   Example:
const a = new String("hello");
const b = new String("hello");
console.log(a === b); // false ❌ different objects


Final Simple Rule:

Singleton ≈ Literal (same value, reused, one instance).
Non-Singleton ≈ Created with new (different instances, even if value looks same).
*/

//ANOTHER WAY TO DECLARE OBJECTS:

const tinderUse1 = new Object()
console.log(tinderUse1)     // Output: {} //(empty)

const tinderUser = {}
tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

console.log(tinderUser)

//--------------------------------------------------------------------------------------------------------------------------

// HERE SORTING & SEARCHING DATA BY KEYS OR VALUES: (VERY IMPORTANT TOPIC)

console.log(tinderUser) //Output:  { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser))     //Output: [ 'id', 'name', 'isLoggedIn' ]     //(these are all keys of the object and NOTE: output given in ARRAYS format.)    //Object.keys() returns an array of all the property names (keys) of the object.
console.log(Object.values(tinderUser))   //Output: [ '123abc', 'Sammy', false ]   //(these are all keys of the object and NOTE: output given in ARRAYS format.)      //Object.values() returns an array of all the property values.
console.log(Object.entries(tinderUser))  //Output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]         //Object.entries() returns an array of key-value pairs, where each property becomes a small array of [key, value].

//==> here a to find(search) keys or values, whether it exit in the object or not: 
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //Output: true  //It checks whether the object tinderUser actually has a property called 'isLoggedIn' or not.
console.log(Object.keys(tinderUser).includes('isLoggedIn'))  //Output: true    //(.includes) and (.hasOwnProperty) doing the same thing

console.log(Object.values(tinderUser).includes('Sammy')) //Output: true     //this find from values

//-----------------------------------------------------------------------------------------------------------------------

//HERE HOW TO ACCESS THE NESTED OBJECTS?:

const regularUser = {
    email: 'some@gmail.com',
    userfullname: {                 //nested object
        fullname: {                 //another nested object
            firstName: 'Pawan',
            lastName: 'Yadav'
        }
    }
}
console.log('userfullname: ', regularUser.userfullname)
console.log('fullname: ', regularUser.userfullname.fullname)
console.log('lastname: ', regularUser.userfullname.fullname.lastName)

//--------------------------------------------------------------------------------------------------------------------

// HOW TO MERGE TWO OBJECTS:

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4:'d'}
const obj3 = {5: 'e', 6:'f'}

const obj = {obj1, obj2} // this will print object under object, like arrays. this is not right way to merge two objects
console.log(obj)         // Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }    //( this is object inside object)

const objBoth = Object.assign(obj1, obj2) // this is perfect way to merge two objects
console.log(objBoth)                      // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const objBoth1 = Object.assign({}, obj1, obj2) //this is syntax wise very perfect but output will be same
console.log(objBoth)

//==>here is the most famous way to merge objects (same like happen in arrays)

const objAll = {...obj1, ...obj2, ...obj3}// Merge by SPREAD OPERATOR{...Object}
console.log(objAll)                         //Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'd', '5': 'e', '6': 'f' }

//----------------------------------------------------------------------------------------------------------------------

// MOST OF THE TIME YOU WILL GET DATA FROM DATABASE (AS AN ARRAY OF OBJECTS):

const users = [

    {
        id: 1,
        email: "pawan@gmail.com"
    },
    {
        id: 1,
        email: "pawan@gmail.com"
    },
    {
        id: 1,
        email: "pawan@gmail.com"
    },
    {
        id: 1,
        email: "pawan@gmail.com"
    },
    {
        id: 1,
        email: "pawan@gmail.com"
    }

]
users[1].email // this is way to find first part data but (this code is incomplete)