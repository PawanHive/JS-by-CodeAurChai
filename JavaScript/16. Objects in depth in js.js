// know more about singleton 
Object.create

// object literals

const mySym = Symbol('key1') // this is declaration of symbol to use it in object

const JsUser = {
    name: 'Pawan',
    'full name': 'Pawan Yadav',
    [mySym]: 'mykey1',      // remmeber these syntax to use it as a key in object
    age: 18,
    email: 'pawan@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}

// here ways to access objects data
console.log(JsUser.email)  //this called (Dot Notation)  // yeh bhi ek tarika hai... object ke data ko access karne ka (NOTE: most of the time use this way to access object data)
console.log(JsUser['email']) // this called ([] Bracket Notation)
console.log(JsUser['full name']) // if there is normal key: value pair hain, toh square bracket ke undar inverted commans hone chahiye
console.log(JsUser[mySym]) // remember this syntax to print symbol as a key (it not need inverted commas inside square bracket)

JsUser.email = 'pawan@chatgpt.com'
//Object.freeze(JsUser) // this will freeze(stop) any future changes in the object
JsUser.email = 'pawan@microsoft.com'
console.log(JsUser)

JsUser.greeting = function(){
    console.log('Hello JS User');
}

JsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`); // remember (this ) functions
}

console.log(JsUser.greeting)
console.log(JsUser.greeting())