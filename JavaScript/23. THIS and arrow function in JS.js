//++++++++++++++++++ Arrow Functions ++++++++++++++++++++++++

//HERE MORE ABOUT (this)--SPECIAL OBJECT REFERENCE

const user = {
    username: 'pawan',
    price: 999,

    welcomMessage: function() {
        console.log(`${this.username}, welcome to website`)             //(this) = current context of the scope
        console.log(this)               // this will print all context ( a big output)****
    }
}
user.welcomMessage()        //output: pawan, welcome to website
user.username = 'sam'                        // here we change the value of (username)
user.welcomMessage()     //NOW let see...   //output: sam, welcome to website

console.log(this)     //output: {}      //because global scope has no context

//NOTE: (this) works only on OBJECTS or FUNCTION INSIDE OBJECT.

//--------------------------------------------------------------------------------------------------

// IS (this) WILL WORK  ON FUNCTION ONLY? NO.  (let see below)

function chai(){
    console.log(this)            //this will give (a big output), which we can't understand 
}
chai()

//==> 
    function chai1(){
        let username = 'Pawan'
        console.log(this.username)          //REMEMBER: (this) works into OBJECTS or OBJECT with NESTED FUNCION but not in FUNCTION only. that why we get output as (undefined)
    }
    chai1()     //output: undefined  
    
    //==> using (this) in FUNCTION EXPRESSION will also give you (undefined) as output: 
        const chai2 = function(){               //FUNCTION EXPRESSION
            let username = 'pawan'
            console.log(this.username)
        }
        chai2()         //output: undefined

        //==> Even (this) will not work in ARROW fUNCTION [  () => {}  ]:
            const chai3 = () => {               //ARROW FUNCTION SYNTAX**
                let username = 'pawan'
                console.log(this.username)
                console.log(this)
            }
            chai3()


//+++++++++++++++++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++++++++   

//() => {}        //basic SYNTAX of ARROW FUNCTION

//ARROW FUNCTIONS CAN RETURN VALUES IN TWO WAYS:

//==> 1st: (EXPLICIT RETURN (you write return-statement))
const addTwo = (num1, num2) => {                //REMEMBER/SYNTAX**
    return num1 + num2
}
console.log(addTwo(3, 4))

//==> 2nd: (IMPLICIT RETURN (no return-statement required, value is automatically returned))
const addTwo1 = (num1, num2) => num1 + num2         //REMEMBER/SYNTAX**
console.log(addTwo1(5, 7))

        //==> can also write like this:
        const addTwo2 = (num1, num2) => (num1 + num2)      //REMEMBER/SYNTAX**     //here only parenthesis() added only
        console.log(addTwo1(5, 7))

        //==> parenthesis() after ARROW FUNCTION is very important while returning the OBJECT:
        const addTwo3 = (num1, num2) => ({username: 'Pawan'})    //NOTE: if you forget to add parenthesis() first then curly brack() only will create problem

//---------------------------------------------------------------------------------------------------------
