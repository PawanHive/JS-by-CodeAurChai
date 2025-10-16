
// THIS WILL PRINT DESCRIPTOR PROPERTY OF (Math.PI):

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

//output: 
/*
{
  value: 3.141592653589793,
  writable: false,                                      // means no one can overwrite it. it is hardcoded in C++
  enumerable: false,       
  configurable: false      
}
*/
//---------------------------------------------------------------------------------------------------------------

// KYA HAMARE (OBJECT) KI BHI (DESCRIPTOR PROPERTY) HAI, AGAR HAI TOH USSE APNE HISSAB SE KAISE MODIFY KAR SAKTE HAI:

const chai = {              // this is Object
    name: 'ginger chai',    // this is property
    price: 250,             // this is property
    isAvailable: true,       // this is property

    orderChai: function() {
        console.log('chai nahi bahi')
    }
}
    //Wrong
console.log(Object.getOwnPropertyDescriptor(chai))      //output: undefined
    /*
    undefined because,
    chai is not an property, it's an object and getOwnPropertyDescriptor() tell about property descriptor
    so we have to specifically tell them property of chai like ('name', 'price', ...)
    */

    //Correct
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
//output: 
/*
{
  value: 'ginger chai',
  writable: true,                               //means we can change value according to us
  enumerable: true,
  configurable: true
}
*/

//==> NOW, HERE WE CAN MODIFY THE PROPERTY OF AN OBJECT:

Object.defineProperty(chai, 'name', {           //REMEMBER/SYNTAX **
    writable: false,                    
    enumerable: false, 
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
// output:
/*
{
  value: 'ginger chai',
  writable: false,                          // (false) means: cannot be changed futher
  enumerable: true,                         // (true) means: can appear in loops like for...of (means it is iteratable)
  configurable: false                       // cannot be deleted or redefined
}
*/

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}
//output: 
/*                      // name: 'ginger chai' not printed because we modified it's (writable) value to (false)
price : 250                         
isAvailable : true
*/

//----------------------------------------------------------------------------------------------------------------------------

//==> NOW CAN WE CHANGE name: value ('Abhishek') to 'Pawan'.... let try, by making (writable: false):

const user = {};

Object.defineProperty(user, 'name', {
    value: 'Abhishek', 
    writable: false,        // cannot be changed 'Abhishek' to 'Pawan', because we made it (false)
    enumerable: true,       // will appear in loops like for...in
    configurable: false     // cannot be deleted or redefined
});

console.log(user.name);     // output: "Abhishek"

user.name = 'Pawan';        // will not cange because writable: false
console.log(user.name);     // still //output: "abhishek"

//-----------------------------------------------------------------------------------------------------------------------

//HERE WE WILL TRY TO CHANGE THE VALUE OF (Math.PI) to 10: FAILED

console.log(Math.PI);       // output: 3.141592653589793
Math.PI = 10;                 // tried to change
console.log(Math.PI)       // again //output: 3.141592653589793

Object.defineProperty(Math, "PI", {
    writable: true,
    enumerable: true,
    configurable: true
})

Math.PI = 10;           // agian tried to change
console.log(Math.PI)    //but again get //output: 3.141592653589793                

//means (Math.PI) value will not change because it is hard coded and implemented deep inside the JavaScript engine (which itself is written in C/C++).
