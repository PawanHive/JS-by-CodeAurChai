/*
What is a closure?

A closure allows a function to “remember” and access variables from its outer scope,
even after that outer function has finished executing.
*/

function outer() {
    const name = 'Hitesh';      // variable inside outer()
    
    function inner() {
        console.log(name);      // 👈 CLOSURE: inner() is using 'username' from outer()
    }
    return inner;                //REMEMBER/SYNTAX    // returning inner() creates the CLOSURE
}
const myfunc = outer();          // outer() runs, but its variables are kept alive by closure
myfunc();                        // ✅ inner() still remembers 'username' → prints "Hitesh"

        //------------------- ABOVE SAME CODE CAN ALSO WRITE LIKE THIS --------------------------------------

function outer() {
    const name = 'Pawan';

    return function inner() {             //REMEMBER/SYNTAX     // in this code here CLOSURE concept applied (by returning inner funciton directly) ....this is also same code
        console.log(name);
    }
}
const myfunc1 = outer();
myfunc1

/*
💡 Simple explanation:
    ==> The closure is created when inner() is returned —
    ==> it remembers username from outer(),
    ==> even though outer() has already finished running.
*/

/*
Here’s what happens step by step:

    ==> outer() is called immediately.
    ==> Yes, the function runs right away.
    ==> Inside outer(), username is created and inner function is defined.
    ==> outer() returns inner, so myFunc now holds the inner function, not the result of running inner() yet.
    ==> myFunc() — only when this is called, the inner function runs and prints "Hitesh".
*/

/*
✅ Summary:

Expression	                    Happens immediately?	                        What it returns

outer()	                        ✅ Yes, outer runs	                        Returns inner function
myFunc()	                    ✅ Only now, inner runs	                    Prints "Hitesh"

So: outer() runs immediately, inner() runs later when you call myFunc().
*/

//------------------------------------ PRACTICAL CLOSURES ----------------------------------------------