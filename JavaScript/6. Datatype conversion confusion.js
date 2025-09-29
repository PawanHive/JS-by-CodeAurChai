let score = 33
console.log (typeof score);
console.log (typeof (score)); // this will also give the same output like upper one
// output: number
//         number

let score1 = "33"
console.log(typeof score1)
console.log(typeof (score1));
// output: string
//         string

// confirmly converting any value(string or number) to number below:

let valueInNumber = Number(score1)      // remember this formula
console.log(typeof valueInNumber)       // output: number
console.log(valueInNumber)

let score2 = "33abc"
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)   //output: number
console.log(valueInNumber2)     // Output: NaN  //(means Not a Number)--this is flaws of JS

let score3 = undefined
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)  // Output: number
console.log(valueInNumber3)         // Output: NaN

let score4 = true
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)  // Outpur: number
console.log(valueInNumber4)         // Output: 1

let score5 = false
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5)   // Output: number
console.log(valueInNumber5)          // Output: 0


// while converting to number
/*
 "33" => 33
 "33abc" => NaN
 true => 1;  fale => 0
 */

 // NOW BELOW CONVERTING NUMBER TO BOOLEANS:

 let isloggedIn = 1
 let booleanIsLoggedIn = Boolean(isloggedIn)
 console.log(booleanIsLoggedIn);        // Output: true

 let isloggedIn1 = ""
 let booleanIsLoggedIn1 = Boolean(isloggedIn1)
 console.log(booleanIsLoggedIn1);       // Output: false

 let isloggedIn2 = "Pawan"
 let booleanIsLoggedIn2 = Boolean(isloggedIn2)
 console.log(booleanIsLoggedIn2)        // Output: true

 // Remember while converting number to boolean:
/*
1 => true;  0 => false
"" => false
"Pawan" => ture
*/

// LIKE THIS YOU CAN ALSO CONVERT NUMBER INTO STRING BELOW:

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);      // Output: 33
console.log(typeof stringNumber);  // Output: string