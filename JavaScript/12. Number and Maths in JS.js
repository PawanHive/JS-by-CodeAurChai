const score = 400
console.log(score)                      // Output: 400


//Normally, you don’t need it 🚫.But it allows access to methods and properties of the Number object (though primitives can auto-box too):
const balance = new Number(100)  // this is number object
console.log(balance)                    // Output: [Number: 100]

console.log(balance.toString().length)  // Output: 3
console.log(balance.toFixed(2))         // Output: 100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) // Output: 23.9

const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3)) // Output: 124


const otherNumber2 = 1123.8966
console.log(otherNumber2.toPrecision(3)) // Output: 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) //Output: 10,00,000

// ++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4)) // absolute value
console.log(Math.round(4.6)) // round of
console.log(Math.ceil(4.2)) // choose top value
console.log(Math.floor(4.9)) // choose lowest value
console.log(Math.min(4, 3, 5, 8))
console.log(Math.max(4, 3, 5, 8))

console.log(Math.random()) // alway give random value between 0-1
console.log((Math.random()*10) +1) // this will print value between 1-10
console.log(Math.floor(Math.random()*10) +1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min) // remember this formula to print random number between 10-20