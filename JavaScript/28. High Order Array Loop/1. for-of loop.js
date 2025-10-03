//++++++++++++++++++++ for-of ++++++++++++++++++++++
// for-of is array specific loop and very important in real world:

//kind of array: 
//["", "", ""]
//[{}, {}, {}]


// for-of on ARRAY:
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num)        //prints each number directly
}

//for-of on STRING:
const greeting = "Hello world!"
for (const greet of greeting) {
    console.log(`Each character is ${greet}`)
}

//++++++++++++++++++++++++++++ Maps ++++++++++++++++++++++++++++++

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")              //(Map) is know for key:value pair will print in order, and unique value only, (like here, this line will not print twice)

console.log(map)
// Output:
//   'IN' => 'India',
//   'USA' => 'United State of America',
//   'Fr' => 'France'

for (const mapping of map) {
    console.log(mapping)
}                                   //this will print key:value in an array format
// Output:
// [ 'IN', 'India' ]
// [ 'USA', 'United State of America' ]
// [ 'Fr', 'France' ]

    //==> to print key and value seprately:
        for (const [a, b] of map) {         // a = automatically refer to (keys) and b = will automatically refer to (values)
            console.log(a, ":-", b)
        }
        // Output:
        // IN :- India
        // USA :- United State of America
        // Fr :- France

    //==> this totally same (as above)
        for (const [key, value] of map) {       //automatically word 'key' and 'value' will refer to actual (keys:value) pair of (Map)---like above code
            console.log(key, ":-", value)
        }
        // Output:
        // IN :- India
        // USA :- United State of America
        // Fr :- France

//------------------------------------------------------------------------------------------------------
//for-of loop on Object:

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
//Output: TypeError: myObject is not iterable

//NOTE: remember for-of loop are not capable to iterate(loop) the OBJECT.
