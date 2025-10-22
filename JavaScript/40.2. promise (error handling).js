//++++++++++++++ Now see how error handling works in all three styles: Callback → Promise → Async/Await ++++++++++++++++++++

//-------------------------------------- 🧱 1. Using Callback (Old Style) ----------------------------------------------

function fetchUserData(callback, errorCallback) {
    setTimeout(() => {
        let success = Math.random() > 0.5; // 50% chance of success
        if (success) {
            callback({name: 'pawan', age: 21});
        } else {
            errorCallback('Failed to fetch use data!')
        }
    }, 2000);
}

console.log('Start fetching...')

fetchUserData(
    (user) => console.log('User data received: ', user),
    (error) => console.log('Error: ', error)
);
console.log("Other code running...");

//🧾 Possible Outputs:
                        /*
                        Start fetching...
                        Other code running...
                        User data received:  { name: 'pawan', age: 21 }

                                        (OR)

                        Start fetching...
                        Other code running...
                        Error:  Failed to fetch use data!
                        */

//-------------------------------------- 🌈 2. Using Promise ----------------------------------------------

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5  // 50% chance of success
            if (success) {
                resolve({name: 'hitesh', age: 43})
            } else {
                reject("failed to fetch user data(promise)")
            }
        }, 2000);
    })
}
console.log('start fetching...')

fetchUserData()
    .then((user) => console.log('user data received: ', user))
    .catch((error) => console.log("Error: ", error))
    .finally(() => console.log("Operation finished"))
//🧾 Possible Outputs:
                        /*
                        start fetching...
                        user data received:  { name: 'hitesh', age: 43 }
                        Operation finished

                                        (OR)

                        start fetching...
                        Error:  failed to fetch user data(promise)
                        Operation finished
                        */

//-------------------------------------- ⚡ 3. Using Async/Await ----------------------------------------------

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5 // 50% chance of success
            if (success) {
                resolve({name: 'sonu', age: 25});
            } else {
                reject('failed to fetch use data (async/await');
            }
        }, 2000);
    })
}

async function showUserData() {
    try {
        console.log('Start fetching...')
        const user = await fetchUserData();
        console.log('User data received: ', user)
    } catch (error) {
        console.log('Error: ', error)
    } finally {
        console.log('Operation finished')
    }
}
showUserData();
//🧾 Possible Outputs:
                        /*
                        Start fetching...
                        User data received:  { name: 'sonu', age: 25 }
                        Operation finished

                                        (OR)

                        Start fetching...
                        Error:  failed to fetch use data (async/await
                        Operation finished
                        */