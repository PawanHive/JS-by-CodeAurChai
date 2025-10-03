//++++++++++++++++++++ for-in loop +++++++++++++++++++++++++++++

//for-in loop to iterate OBJECT---(REMEMBER: OBJECT will not iterate using for-of)
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
//==> thsi will print (keys) only:
for (const key in myObject) {
    console.log(key)    
}
// Output:
// js
// cpp
// rb
// swift

//==> this will print value of (keys) also:
for (const key in myObject) {
    console.log(myObject[key])          //REMEMBER/SYNTAX**
}
// Output:
// javascript
// C++
// ruby
// swift by apple


//==> this will print key:value pair
for (const key in myObject) {
    console.log(`${key} is shortcut of ${myObject[key]}`)        //REMEMBER/SYNTAX**
}
// Output:
// js is shortcut of javascript
// cpp is shortcut of C++
// rb is shortcut of ruby
// swift is shortcut of swift by apple

//------------------------------------------------------------------------------------------------------------------
// is we can use (for-in loop) for ARRAY?:
const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {            //will print (keys) only
    console.log(key)
}
//Output:                           //REMEMBER as an output (for-in loop) in ARRAY printed (keys) not (values), whether (for-of loop) in ARRAY printed (values) not (keys)
// 0
// 1
// 2
// 3
// 4

    //==> this will print (values) only:
        const programming1 = ['js', 'rb', 'py', 'java', 'cpp']

        for (const key in programming1) {
        console.log(programming1[key])              //will print (value)
        }

    //==> this will print (keys:value) pair:
        const programming2 = ['js', 'rb', 'py', 'java', 'cpp']

        for (const key in programming2) {
        console.log(`${key} index of ${programming2[key]}`)         //print both (keys: value)
        }

//-----------------------------------------------------------------------------------------------------
//is (for-in loop) will work for MAP? NO:
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key)
}
//NOTE: MAP is not iteratable by (for-in loop) ----remember it