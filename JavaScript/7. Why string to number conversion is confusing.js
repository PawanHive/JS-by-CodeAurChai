// *********************** Operation ***********************

let value = 3
let negValue = -value
console.log(negValue); // Output: -3

// console.log(2 + 2)  // these output are very easy
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 2)
// console.log(2 / 2)
// console.log(2 % 2)

let str1 = "hello "
let str2 = "pawan"

let str3 = str1 + str2
console.log(str3)   // Output: hello pawan

// BELOW DISCUSING ABOUT COMPLEX SITUATION

console.log("1" + 2)        // Output: 12
console.log(1 + "2")        // Output: 12
console.log("1" + 2 + 2)    // Output: 122 //(matlab agar pehle string raha to sara string manleta h JS)
console.log(1 + 2 + "2")    // Output: 32 //(pehle operation rha or baad me string to pehle, toh pehle operation hoga)

console.log(true)   // Output:  true //(remember this )
console.log(+true)  // Output: 1 
console.log(+"")    // Output: 0    //(but dont do such kind of dirty conversion in code)


let gameCounter = 100
gameCounter++;      // this is postfix operator
console.log(gameCounter)    // Output: 101

let gameCounter1 = 100
++gameCounter1;      // this is prefix operator
console.log(gameCounter1)    // Output: 101 //(here you didn't find differece in both operator but it has... follow below)

// NOTE: learn about Prefix and Postfix Operator from JS mdn website 

let n1 = 5;
console.log(++n1); // 6 (prefix: increment first, return new value)

let n2 = 5;
console.log(n2++); // 5 (postfix: return old value, then increment)
console.log(n2);   // 6 (increment happened after)
