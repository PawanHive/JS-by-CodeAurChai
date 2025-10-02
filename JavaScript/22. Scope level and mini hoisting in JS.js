// HOW TO CREATE NESTED SCOPE:

function one(){                         // REMEMBER/SYNTAX**
    const username = 'pawan'
    
    function two(){
        const website =  'youtube'
        console.log(username)           // REMEMBER (child function) can access (parent variable).... like chhotta bachha bade ka icecream chhin sakta hai.
    }
    //console.log(website)            // this will not execute because it's out off the function SCOPE (not OBJECT kind of situation)....// remember code execute line by line so it will stop further execution.
    
   two()                //execution to yahi kar rha hai (one) ke variable se 
}
one()                 // (one) function ko call karna jaruri hai, warna output nahi milega


//==> same thing happen with (if-else statement) also:
if (true) {
    const username = "pawan"
    if (username === 'pawan') {
        const website = 'youtube'
        console.log(username + website)
    }
   // console.log(website)                //ERROR because outoff the scope
}
//console.log(username)                   //ERROR because outoff the scope



// ++++++++++++++++++++++++++++++ Interesting Concept (hoisting) +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//DIFFERENT WAY TO DECLARED FUNCTION

//==> 1st condition: (this is SIMPLE FUNCTION)
function addOne(num){           
    return num + 1
}
console.log(addOne(5))  //output: 6        // calling functioon after function declaration      
//      |
//      |___ NOTE: 1st condition of FUNCTION: (can call above it declaration):
                    console.log(addOne1(5))   //output: 6         //calling function above function declaration
                    function addOne1(num){
                        return num +1
                    }


//==> 2nd condition:  (this is also FUNCTION but sometime we call it a FUNCTION EXPRESSION... because it stored in a variable (a FUNCTION without NAME))  

const addTwo = function(num){           //notice this function has no NAME (like condition one)----- called FUNCTION EXPRESSION 
    return num + 2
}
console.log(addTwo(5))  //output: 7        // calling functioon after function declaration
//          |
//          |____
//               NOTE: 2nd condition of FUNCTION: (cannot call above function declaration):
                        console.log(addTwo1(5))             //ERROR because call functino above declaration (which is not allowed in FUNCTION EXPRESSION ---- this condition called **HOISTING**)
                        const addTwo1 = function(num){
                            return num + 2
                        }

