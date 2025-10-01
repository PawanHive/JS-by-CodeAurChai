// Dates and its methods

let myDate = new Date()
console.log(myDate)                      //Output: 2025-09-30T07:18:45.603Z
console.log(myDate.toString())           //Output: Tue Sep 30 2025 12:48:45 GMT+0530 (India Standard Time)
console.log(myDate.toISOString())        //Output: 2025-09-30T07:18:45.603Z
console.log(myDate.toJSON())             //Output: 2025-09-30T07:18:45.603Z
console.log(myDate.toLocaleString())     //Output: 30/9/2025, 12:48:45 pm
console.log(myDate.toLocaleDateString()) //Output: 30/9/2025
console.log(myDate.toDateString())       //Output: Tue Sep 30 2025

console.log(typeof myDate) //Output: object //(interview question hai)

// your own create date
let myCreateDate = new Date(2025, 0, 23) // remember month in Js start from zero(0) like index number
console.log(myCreateDate)
console.log(myCreateDate.toDateString()) //Output: Thu Jan 23 2025

let myCreateDateTime = new Date(2025, 0, 23, 5, 3, 30) // after date it will convert into time
console.log(myCreateDateTime.toLocaleString())

let myCreateDateTime1 = new Date("2025-01-23") // this is yyyy-mm-dd format, and remember her for january you have write 01 not 0, like earlier start month from 0, here not applicable
console.log(myCreateDateTime1.toLocaleString())

// here about timeStamp

let myTimeStamp = Date.now()// remember syntax

console.log(myTimeStamp) // this will print milliseconds from (01 jan, 1970)
console.log(myCreateDateTime.getTime())  // this i will print milliseconds from createDateTime
console.log(Math.floor(Date.now()/1000)) // this will print total second from (01 jan, 1970), because i divided millisecond by 1000

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) // this will print month and +1 because js start month from 0 thats why added 1
console.log(newDate.getDay()) // print days in number like (2 for tuesday)

