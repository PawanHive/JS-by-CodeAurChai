const name = 'Pawan' // this is also declared string
const repoCount = 50

console.log(name + repoCount + "Value"); // this is not good way to concatenate anything 

// this is best way to concatenate (use backtick (` `))
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)// this is string interpulation

// Another way to declare string
const gameName = new String('Pawan HC') // then run in console-- gameName


// here are some method of string:

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("t"))
console.log(gameName.substring(0, 4))
console.log(gameName.slice(-6))
console.log(gameName.slice(-6, 4)) //

// here trim method of string
const newStringONe = "    Pawan   "
console.log(newStringONe)
console.log(newStringONe.trim()) // this will remove unwanted space of string

// here is replace method and find method
const url = 'https://pawan.com/pawan%20yadav'
console.log(url.replace('%20', '_'))
console.log(url.includes("pawan")) //
console.log(url.split('/'))

// NOTE: please do practice all method of string which you can get in the prototype dropdown list by running above code in console of chrome