let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)



//(var) IS NOT WORKING LIKE BLOCK SCOPE: (note: {} = are consider scope in js)
if (true) {
    let d = 10          // (let) are block scope thats why it won't pass value outside the scope
    const e = 20        // (const) are block scope thats why it won't pass value outside the scope
    var f = 30          // (var) is global scope so that it can pass value any where (don't use var in code)

    console.log('Inner Scope: ', d)
}

let d = 10000      //this is out from scope
console.log('Outer Scope: ', d)

var f = 300 
console.log(f)


//NOTE: scope in browser console is dfferent than scope in code environment while running code using node 