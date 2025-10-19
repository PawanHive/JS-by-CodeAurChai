// +++++++++++++++++++++++++++++++++++++++++++ Promise by ChatGPT +++++++++++++++++++++++++++++++++++++++++++++++++++
/*
🧩 1. What is a Promise?
A Promise is an object that represents the result of an asynchronous operation — it can either:

    ==> ✅ Succeed (fulfilled) → gives you a value
    ==> ❌ Fail (rejected) → gives you an error
    ==> ⏳ Pending → still running, result not ready yet

In short:
    ==> A Promise is like a “guarantee” that something will be done — maybe later, not immediately.
*/

/*
🎯 PURPOSE OF PROMISE

    ==> A Promise is used to handle asynchronous operations in JavaScript —
        i.e., tasks that take time to complete (like network requests, file loading, timers, etc.)
        so that your code doesn’t “freeze” or stop executing.
*/

/*
🧩 In Simple Words

    ==> JavaScript runs line by line (single-threaded).
        If one line takes 5 seconds (like downloading data from an API),
        everything below it will stop until it finishes ❌

👉 Promises solve this problem.

They let JS:

    ==> continue executing other code ⏩
    ==> and come back later when the async task is done ✅ or failed ❌.
*/

//+++++++++++++++++++++ HERE WE WILL LEARN 3 WAYS TO DECLARE PROMISE ONLY FOR (resolve) +++++++++++++++++++++++++++


//------------------------------------ 🧱 1. Using Callback (Old Style) ------------------------------
        
function fetchUserData(callback) {
    setTimeout(() => {
        callback({name: 'pawan', age: '21'})
    }, 2000);
}
console.log('Start fetching...')

fetchUserData(function(user) {
    console.log('User data received: ', user);
});
console.log('Other code running...');
//output: 
        /*
        Start fetching...
        Other code running...
        User data received: { name: 'Pawan', age: 21 }
        */

// 🧠 Problem:
// If you have multiple async steps → code becomes deeply nested and messy (callback hell).
//If you have many async steps, callbacks get nested like this:
    // doSomething(() => {
    //     doSomethingElse(() => {
    //         doThirdThing(() => {
    //             console.log('DONE');
    //         });
    //     });
    // });
    // ** This is called CALLBACK HELL **

//--------------------------------------- 🌈 2. Using Promise (Modern Way) ---------------------------------------
        // creating promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: 'hitesh', age: 42})
        }, 2000);
    })
}

console.log('Start fetching (promise)...');

        // consume promise
fetchUserData()
    .then((user) => {
        console.log('User data received: ', user)
    })
    .catch((error) => {
        console.log('Error: ', error)
    })

console.log("Other code also running...")
//output: 
        /*
        Start fetching (promise)...
        Other code also running...
        User data received:  { name: 'hitesh', age: 42 }
        */

//------------------------------------ ⚡ 3. Using Async/Await (Most Modern & Clean) ----------------------------------

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: 'sonu', age: 25});
        }, 2000);
    });
}

async function showUserData() {
    console.log('Start fetching(async/await)...')
    const user = await fetchUserData();
    console.log('User data received: ', user);
    console.log('Other code also running...')
}
showUserData();
//output: 
        /*
        Start fetching(async/await)...
        User data received:  { name: 'sonu', age: 25 }
        Other code also running...
        */