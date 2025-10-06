//++++++++++++++++++++++++++++++ Reduce() ++++++++++++++++++++++++++++++

//sum of all number using reduce() method
const myNums = [1, 2, 3, ]

const myTotal = myNums.reduce(function (accumulator, currentValue) {                // Using reduce to calculate sum
    console.log(`accumulator: ${accumulator} and currentValue ${currentValue}`)
    // Step 1: accumulator = initial value (here it's 0)
     // Step 2: currentValue = element of array one by one

     // At each step, add currentValue to accumulator
    return accumulator + currentValue
}, 0)                                //REMEMBER/SYNAX**   // <-- initial value is 0 which will goes to the accumulator
console.log(myTotal)
//OUTPUT: 
// accumulator: 0 and currentValue 1
// accumulator: 1 and currentValue 2
// accumulator: 3 and currentValue 3
// 6

        //==> everything is same like above code but here uses IMPLICIT RETURN ARROW FUNCTION:
            const myTotal1 = myNums.reduce( (accumulator, currentValue) => (accumulator + currentValue), 0)
            console.log(myTotal1)
            //OUTPUT: 6

//-------------------------------------------------------------------------------------------------------
// reduce() with OBJECT (cart total)
const shoppingCart = [
    {
        itemName: 'js course', 
        price: 2999
    },
    {
        itemName: 'python course', 
        price: 999
    },
    {
        itemName: 'mobile dev course', 
        price: 5999
    },
    {
        itemName: 'data science course', 
        price: 12999
    },
]

            // add prices of the cart
const priceToPay = shoppingCart.reduce( (accumulator, item) => (accumulator + item.price),0 )
console.log(priceToPay)