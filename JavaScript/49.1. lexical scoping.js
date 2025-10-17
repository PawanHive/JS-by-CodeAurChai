//+++++++++++++++++++++++++++++++++++++++++++ Lexical Scoping ++++++++++++++++++++++++++++++++++++++++++++

/*
🧩 2. What is Lexical Scope?
    Lexical scope means:
    ==> “The scope of a variable is determined by where it is written in the source code, not by where or when it is called.”

    ==> So, lexical = by location in code.
    ==> In other words, JavaScript decides which variables you can access based on where your function is defined, not where it’s executed.
*/

/*
🎯 Purpose of Lexical Scope
In simple words:

    ==> Lexical scope allows inner functions to access variables from their outer (parent) functions,
        so that functions can share and reuse data safely without global variables.
*/

function outer() {
    let username = 'hitesh'
    console.log(secret);                    // ❌ Error: 'secret' not accessible here (not in scope)

    function innerOne() {
        let secret = 'my123';
        console.log('InnerOne: ', username);    // ✅ Can access 'username' from parent scope
    }

    function innerTwo() {
        console.log('InnerTwo: ', username);    // ✅ Can access 'username' from parent scope
        console.log(secret);                     // ❌ Error: 'secret' only exists inside innerOne()
    }
    innerOne();     // ✅ Runs innerOne
    innerTwo();     // ⚠️ Error when trying to access 'secret'
}
outer();
console.log('Too Outer: ', username);       // ❌ Error: 'username' not defined in global scope