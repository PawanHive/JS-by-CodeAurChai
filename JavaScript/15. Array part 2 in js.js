const marvel_heros = ['thor', 'Ironman', 'spiderman']
const dc_heros = ['superman','flash', 'batman']

//marvel_heros.push(dc_heros) //output: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] //(many people thing it will merge both but it makes arrays into arrays (and inside array will consider as an single element) )

console.log(marvel_heros)
//console.log(marvel_heros[3][1]) //output: flash //([3] is 3rd element(actually array) and [1] is 1st element of this inside array which is 3rd element)

// we can also use concat:
const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros)// this will merge properly, first assign in varible (allHeros) 
// but this above options are not best way to merge two arrays 

// here is SPREAD OPERATOR way to merge arrays:

const all_new_heros = [...marvel_heros, ...dc_heros] // merge array my spred operator (...ArrayName)
console.log(all_new_heros)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //It flattens nested arrays into a single array (removes nesting).
console.log(real_another_array)


console.log(Array.isArray('pawan')) //Checks if the given value is an array. output: false
console.log(Array.from('pawan')) // converted in array output: [ 'p', 'a', 'w', 'a', 'n' ]
console.log(Array.from({name: 'pawan'})) // interview question // but this will give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // this will convert all above score primitive data into array