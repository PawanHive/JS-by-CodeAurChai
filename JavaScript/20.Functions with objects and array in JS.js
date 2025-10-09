// ++++++++++++++++++++++++ Function with REST PARAMETER +++++++++++++++++++++++++++++

// WHEN YOU DON'T KNOW (HOW MANY ARGUMENT CAN PASS?).. LIKE ADDING THE SHOPING CART PRICES OF ITEMS
//==>
function calculateCartPrice(num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500))  //Output: 200

//==>
function calculateCartPrice1(...num1) {     //REST and SPREAD OPERATOR looks same, but differenciate according to condition.
    return num1
}
console.log(calculateCartPrice1(200, 400, 500, 2000))   //Output: [ 200, 400, 500, 2000 ]

//==>
function calculateCartPrice2(val1, val2, ...num1) {     //val1 = 200, val2 = 400,  rest of the things will goes to ...num1 = [500, 2000]
    return num1
}
console.log(calculateCartPrice2(200, 400, 500, 2000)) //Output: [ 500, 2000 ]

//--------------------------------------------------------------------------------------------------------------------------

//HOW TO PASS OBJECTS INTO FUNCTION:
const user = {
    username: "Pawan", 
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`)       //REMEMBER/SYNTAX**
}
handleObject(user) //Output: Username is Pawan and price is 199.         // while passing ARGUMENT... we connect FUNCTION to OBJECTS

//==> we can also pass direct OBJECT into ARGUMENT:
handleObject({                                            //here we pass direct OBJECT into ARGUMENT
    username: "Hitesh",
    price: 399
})

//--------------------------------------------------------------------------------------------------------------------

//HOW TO PASS ARRAY INTO FUNCTION:
const myNewArray = [200, 400, 100, 600]  //this is ARRAY

function returnSecondValue(getArray) {
    return getArray[1]                      //REMEMBER/SYNTAX**
}
console.log(returnSecondValue(myNewArray))   //Output: 400     // while passing ARGUMENT... we connect FUNCTION(returnSeconValue) to ARRAY(myNewArray)

//==> we can also pass direct OBJECT into ARGUMENT:
console.log(returnSecondValue([800, 700, 300, 500]))
