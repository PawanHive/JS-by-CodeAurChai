//+++++++++++++++++++++++++ Functions +++++++++++++++++++++++++++

console.log('P')
console.log('A')
console.log('W')
console.log('A')
console.log('N')
// this can print

function sayMyName() {
console.log('P')
console.log('A')
console.log('W')
console.log('A')
console.log('N')
}
sayMyName()       //without parenthesis() function name is just a REFERENCE
sayMyName()     //with parenthesis() fuction will EXECUTE(calling the function)


// BASIC FUNCTION TO ADD TWO NUMBERS:
function addTwoNumbers(num1, num2) {      //here (number1), (number2) are known as PARAMETER
    console.log(num1 + num2);
}
addTwoNumbers()         //Output: NaN    //because we didn't give an ARGUMENTS
addTwoNumbers(3, 4)     //Output: 7     // this is with ARGUMENTS
addTwoNumbers(3, "4")       //Output: 34
addTwoNumbers(3, "a")       //Output: 3a
addTwoNumbers(3, null)      //Output: 3

//==> in js we can also store it into variable, but the problem is while getting the value of variable:
const result = addTwoNumbers(3, 4)
console.log('Result: ', result)     //Output: undefined        //because we didn't use (RETURN) Statement

//--------------------------------------------------------------------------------------------------------------------------

//DIFFERENCE BETWEEN PARAMETER AND ARGUMENT:
/*
1). PARAMETER:
A parameter is a variable defined in a function that acts as a placeholder for the value the function will receive.
Think of it as the “name” of the input the function expects.
Example:*/
function greet(name) {              // <- 'name' is a parameter
  console.log("Hello " + name);
}
//The function is ready to accept any value for name when called.

/*
2). ARGUMENT:
An argument is the actual value you pass to the function when calling it.
Think of it as the real input.
Example:*/
greet("Sammy");    // <- "Sammy" is the argument

//-----------------------------------------------------------------------------------------------------------------------

//FUNCTION WITH RETURN STATEMENT:
function addNumbers(num1, num2) {      //here (number1), (number2) are known as PARAMETER
    let result1 = num1 + num2;
    return result1;                     // this is RETURN statement
}
const result1 = addNumbers(3, 4)
console.log("Result: ", result1)


//==> code below RETURN Statement will not execute:
function addNumbers2(num1, num2) { 
    let result2 = num1 + num2;     
    return result2;  
    console.log('Pawan')             // this code of line will never execute because these code are below returns statement(its a rule of JS function)
}
const result2 = addNumbers2(10, 555)
console.log("Result: ", result2)

//==> code above RETURN Statement will execute:
function addNumbers3(num1, num2) { 
    let result3 = num1 + num2; 
    console.log('Pawan');            // ('Pawan') will print because it is NOW above the RETURN Statement
    return result3;  
}
const result3 = addNumbers3(900, 555)
console.log("Result: ", result3)

//==> this can print the same:
function addNumbers4(num1, num2) {            
    return num1 + num2;                 //REMEMBER**
}
const result4 = addNumbers4(1000, 5550)
console.log("Result: ", result4)
//----------------------------------------------------------------------------------------------------------------------

//ANOTHER WAY TO GIVE AND TAKE PARAMETER AND ARGUMENT:
function loginUserMessage(username){
    return `${username}, just logged in`
}
console.log(loginUserMessage("Pawan Yadav")) //Output: Pawan Yadav, just logged in
console.log(loginUserMessage())              //Output: undefined, just logged in     //getting (undefined) because we didn't given ARGUMENT

//==> this will check ki argument mila ki nahi:
function loginUserMessage1(username){
    if (username === undefined) {
        console.log('Please enter the username')        // if we forget to give ARGUMENT then this will print
        return                                          // here RETURN statemnt because, when (if statement) will true then next string(` `) interpulatin of RETURN will not print.
    }
    return `${username}, just logged in`
}
console.log(loginUserMessage1())    //Output: Please enter the username    //because if-statement is true


//==> here using NOT(!) Symbol in If-Statement to make code more professional:
function loginUserMessage2(username){
    if (!username) {                            //after (!), true => false;  false => true
        console.log('Please enter the username')        
        return 
    }                                         
    return `${username}, just logged in`
}
console.log(loginUserMessage2())    //Output: Please enter the username    //because if-statement is true                                  

//==> here... you can also give DEFAULT values in PARAMETER:
function loginUserMessage3(username = 'You'){        // if you forget to give ARGUMENT then by DEFAULT this will "You" will print & if you give argument "You" will be OVERWRITE by them.
    if (!username) {                           
        console.log('Please enter the username')        
        return 
    }                                         
    return `${username}, just logged in`
}
console.log(loginUserMessage3()) //Output: You, just logged in       // "You", getting from PARAMETER section, because "You" defined as a DEFAULT value
console.log(loginUserMessage3('PAWAN YADAV'))   //Output: PAWAN YADAV, just logged in      // here "You" is OVERWRITE by "PAWAN YADAV", because we give it as a ARGUMENT.
