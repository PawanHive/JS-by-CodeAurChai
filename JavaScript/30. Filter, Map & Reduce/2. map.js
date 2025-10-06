//+++++++++++++++++++++++++++++++++++++++++++ map +++++++++++++++++++++++++++++++++++++++++++

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10)
console.log(newNums)

//  CHAINING METHOD with map()
//SYNTAX are like: Array.map().map()

const myNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum1 = myNum1
                    .map( (num) => num * 10)        //this (num) refer to the each element of (myNum1)
                    .map( (num) => num + 1)         // but this (num) refer to the above transformed array[10,20,30,...,100]  //It adds 1 to each of those values → [11,21,31,...,101]
console.log(newNum1)            //Print the final transformed array
//output:
// [
//   11, 21, 31, 41,  51,
//   61, 71, 81, 91, 101
// ]


// CHAINING METHOD with map() + filter()

const myNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum2 = myNum2
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)
console.log(newNum2)
//Output:
// [
//   41, 51,  61, 71,
//   81, 91, 101
// ]
