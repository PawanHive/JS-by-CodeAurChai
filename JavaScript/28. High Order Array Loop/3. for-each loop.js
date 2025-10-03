//++++++++++++++++++++++++++++ for-each loop +++++++++++++++++++++++++++++++++++++++

//(for-each loop) use for ARRAY:

//==> 1st: variation
const food = ['chai', 'biscuit', 'namkeen', 'masala', 'namak']

food.forEach( function (item) {            //REMEMBER/SYNTAX**            //REMEMBER call-back-function ka naam nahi hota hai
    console.log(item)
} )                           
// Output:
// js
// ruby
// java
// python
// cpp

//==> 2nd: variation (using ARROW FUNCTION):
const coding = ['js', 'ruby', 'java', 'python', 'cpp']

coding.forEach( (language) => {                     //REMEMBER/SYNTAX**         //using ARROW FUNCTION
    console.log(language)
})
// Output:
// js
// ruby
// java
// python
// cpp

//==> 3rd variation (taking call-back-function as a reference)
const ai = ['machinelearning', 'deapleanring', 'python', 'modeltraining']       //REMEMBER/SYNTAX** 
function printMe(system) {      //yaha hamne function alag se declare kiya, so that we givne name it as a (printMe)
    console.log(system)
}
ai.forEach(printMe)             // this is function reference, because we given only function name (printMe) ---not parenthesis() beside function
// Output:
// machinelearning
// deapleanring
// python
// modeltraining

//----------------------------------------------------------------------------------------------------------------------
// (for-each) loop print more than just values: can print (VALUES, KEYS(index), ARRAYLIST)
const item = ['chai', 'biscuit', 'namkeen', 'masala', 'namak']

food.forEach((item, index, itemArrayList) => {
    console.log(item, index, itemArrayList)
})
// Output:
// chai 0 [ 'chai', 'biscuit', 'namkeen', 'masala', 'namak' ]
// biscuit 1 [ 'chai', 'biscuit', 'namkeen', 'masala', 'namak' ]
// namkeen 2 [ 'chai', 'biscuit', 'namkeen', 'masala', 'namak' ]
// masala 3 [ 'chai', 'biscuit', 'namkeen', 'masala', 'namak' ]
// namak 4 [ 'chai', 'biscuit', 'namkeen', 'masala', 'namak' ]


//---------------------------------------------------------------------------------------------------------------------
//(for-each) loop mostly use this kind of senario:- [{}, {}, {}] ...means ARRAY which has many OBJECTS inside.

const myCoding = [                          //this ARRAY has many OBJECT ...which will consider as an (item)
    {
        languageName: 'javascript',
        fileName: 'js'
    },
    {
        languageName: 'java',
        fileName: 'java'
    },
    {
        languageName: 'python',
        fileName: 'py'
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);                   //here single OBJECT inside ARRAY is cosidered as single(item) ---so that we have to use (.)notation to access further value of OBJECT
} )
// Output:
// javascript
// java
// python