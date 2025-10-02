// Array

// different way to declaration of array

const myHeros = ['shaktiman', 'naagraj', 'ram']

const myfruits = new Array('orange', 'banana', 'apple', 'kiwi')
console.log(myfruits[1])
console.log(myfruits)

// HERE ARRAY METHODS
myfruits.push('pineapple')
myfruits.push("chikku")
myfruits.push('guava') // inserts data at last
myfruits.pop() // remove last data from array
myfruits.unshift('graps') // inserts data at first
myfruits.shift() // remove data from first

console.log(myfruits)
console.log(myfruits.includes('kiwi')) // search kind of method, if data exit then true, not exit then false
console.log(myfruits.indexOf('kiwi'))

// this actually convert array output into string:
const newArr = myfruits.join() // will convert array's output into string
console.log(myfruits)
console.log(newArr)

// here about slice, splice (difference between slice and splice)

console.log("A ", myfruits)             //Output: A  [ 'orange', 'banana', 'apple', 'kiwi', 'pineapple', 'chikku' ]
const sliceArr = myfruits.slice(1, 3)  // print data on index 1, 2 only (not 3) remmeber 
console.log(sliceArr)                   //Output: [ 'banana', 'apple' ]

console.log("B ", myfruits)           //Output: B  [ 'orange', 'banana', 'apple', 'kiwi', 'pineapple', 'chikku' ]
const spliceArr = myfruits.splice(1, 3)  // print data on index 1, 2, 3 also. (remember)
console.log("C ", myfruits)             //Output: C  [ 'orange', 'pineapple', 'chikku' ]
console.log(spliceArr)                  //Output: [ 'banana', 'apple', 'kiwi' ]

/*
Note: Use slice when you want a copy (non-destructive).
Use splice when you want to modify the array (destructive).
*/
