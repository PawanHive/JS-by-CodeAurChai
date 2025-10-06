// +++++++++++++++ if +++++++++++++++

const isUserloggedIn = true

const temperature = 41
if (temperature === 40 ) {
    console.log("temperature is 41")
} else {
    console.log('temperature is greater than 40')
}


if( 2 == "2"){
    console.log('executed')
}

if (2 != 3) {         // 2 is not equal to 3
    
}

//-------------------------------------------------------------------------
const score = 200

if (score > 100) {
    const power = 'fly'
    console.log(`User power: ${power}`)
}


//==> SHORTHAND NOTATION of (if-statement):

const balance = 1000
if (balance > 500) console.log('Yes, You have more 500 rupees')

//==> NESTEd IF-ELSE STATEMENT:
if (balance < 500) {
    console.log('less than 500')
} else if (balance < 750) {
    console.log('less than 750')
} else if (balance < 900) {
    console.log('less than 900')
} else {
    console.log('less than 1200')
}

//---------------------------------------------------------------------------------------------------------------------------
// AND(&&)----Both Conodition Should Be True:

const uerLoggedIn = true 
const debitCard = true
if( uerLoggedIn && debitCard) {              // here TWO condition checked
    console.log('Allow to buy course')
}

//==> using AND(&&) we can check multiple condition: 
    const uerLoggedIn1 = true 
    const debitCard1 = true
    if( uerLoggedIn1 && debitCard1 && 3 == 2) {              // here THREE condition checked and last condition failed. so this code will not execute further 
    console.log('Allow to buy book')
    }

//---------------------------------------------------------------------------------------------------------------------
// OR(||)----Any One Condition Should Be True:
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {              // here two condition check,  we can check multiple condition also, but one condition should be true.
    console.log("User logged in ")
}

//------------------------------------------------------------------------------------------------------------------
// (??) Nullish Coalescing Operator: (mostly we have to focus on two keywords (null) and (undefined)):

let val1;
val1 = 5 ?? 10
console.log(val1) //output: 5

let val2 = null ?? 20
console.log(val2) //output: 20

let val3 = undefined ?? 15
console.log(val3) //output: 15

let val4 = null ?? 30 ?? 50
console.log(val4) //output: 30

//-------------------------------------------------------------------------------------------------------
// TERNIARY OPERATOR

//SYNTAX: condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80')  //condition ? true : false
//output: more than 80
