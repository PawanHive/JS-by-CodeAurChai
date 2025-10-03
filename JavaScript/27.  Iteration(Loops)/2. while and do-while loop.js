//+++++++++++++++ while-loop ++++++++++++++++++
//SYNTAX:
// while (condition) {
    
// }

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`)
    index = index + 2;
}
/*
Output: 
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/

//while-loop in ARRAY:
let myArray = ['flash', 'batman', 'superman']

let arr = 0
while (arr < myArray.length) {
    console.log(`Value of ${myArray[arr]}`)
    arr = arr + 1
}

//++++++++++++++++++++++++++ do-while loop ++++++++++++++++++++++++++++++++++++++
// this loop very rarely used in real life:
let score = 1
do {
    console.log(`Score is ${score}`)
    score++
} while (score <= 10);


//==>
let score1 = 11                         //remember do-while loop print output first and then check condition
do {
    console.log(`Score is ${score1}`)
    score1++
} while (score1 <= 10);