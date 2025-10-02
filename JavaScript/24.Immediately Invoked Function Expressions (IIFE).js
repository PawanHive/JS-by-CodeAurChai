// Immediately Invoked Function Expression (IIFE)

/*
1. WHY WE USE (IIFE)?  ...interview quesiton
Ans:- ✅ IIFE is a function that runs immediately after it’s defined.
      ✅ It’s mainly used to create a private scope and avoid polluting the global scope.

2. SYNTAX OF (IIFE)?
Ans:- 
(function () {
   console.log("I run immediately!");
})();


*/

// WAYS TO DECLARE (IIFE):

//==> 1st: this is (NAMED IIFE) ...means it has name called 'chai' in below case:
(function chai() {                      //REMEMBER/SYNTAX**
    console.log(`DB CONNECTED`)
})();                                //REMEMBER: 1st> you have to cover whole FUNCTION inside parenthesis() and then at the end of parenthesis add one more parenthesis()...and at the end SEMICOLON is very important.

//==> 2nd:  (UNNAMED IIFE).... (IIFE) using an ARROW FUNCTION:
( () => {
    console.log(`DB CONNECTED TWICE`)
} )();

        //==> you can also give PARAMETER and ARGUMENT:
        ( (name) => {                                         //PARAMETER as 'name'
            console.log(`BD CONNECTED TWICE ${name}`)
        })('pawan')                                           //ARGUMENT as 'pawan'
