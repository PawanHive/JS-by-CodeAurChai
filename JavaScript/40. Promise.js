// HERE WE WILL LEARN HOW TO CREATE PROMISES, THEN WE CAN LEARN HOW TO CONSUME:

//HERE MANY WAYS TO CREATE PROMISES:

//==> 1st:
            //creating promise
const promiseOne = new Promise(function(resolve, reject){
    //Do any async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()               //REMEMBER: if we dodn't add this line then, 'resolve' parameter will never connect to (.then() method) which declared in below code.
    }, 1000)
})
            //consuming promise
promiseOne.then(function(){             //REMEMBER: (.then()) is dedicated to 'resolve' parameter
    console.log('Promise consumed');
})



//==> 2nd: that  above work can also done like this code:

            //creating promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task2');
        resolve()
    }, 1000)
}).then(function() {                    // consuming promise
    console.log('Async 2 resolved');
})


//==> 3rd:

            //Creating promise
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({userName: 'Pawan', email: 'pawan@gmail.com'})          // suppose i took object in the resolve() method
    }, 1000)
})
            //consuming promise
promiseThree.then(function(){
    console.log()
})


//==> 4th: .then(), .catch(), .finally()
            //creating promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){

        let error = true;       // according to (true) value, if-condition will become false and else-statement will execute
        //let error = false;       // according to (false) value, if-condition will become true and if-statement will execute
        if (!error) {           //notTrue = false //condition is (agar error nahi hai)
            resolve({userName: 'Hitesh', password: '123'})
        }else {
            reject('ERROR: Something went Wrong')           //REMEMBER: if we dodn't add this line then, 'reject' parameter will never connect to (.catch() method) which declared in below code.
        }
    }, 1000)
})
            //consuming promise
    promiseFour.then((user) =>{
        console.log(user);
        return user.userName
}).then((myUserName) => {                     //now here .then() method after .then() is known as PROMISE CHAINING or THENABLE CHAINING.
    console.log(myUserName)
}).catch(function(err){                 //REMEMBER: (.catch() method) is dedicated to 'reject' parameter
    console.log(err);
}).finally(() => console.log('The promise is either resolved or rejected'))             // this (.finally() method) is compulsary in promise
//Output: ERROR: Something went Wrong


//==> 5th:- WE CAN CONSUME PROMISE USING (async...await) also, FOR BOTH (resolve, reject) paramter:

            //creating promise
const promiseFive =  new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({userLang: 'JavaScript', password: '321'});
        }else {
            reject('ERROR: JS went wrong');
        }
    }, 1000)
})
            // consuming promise in differnt way (async ...await)
async function consumePromiseFive() {                   //REMEMBER/SYNTAX**
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();       //REMEMBER/SYNTAX**   //here you need to callback the async function at the end.


        //==>Promise with one paramter(resolve), then we no need IF-ELSE statement to CREATE PROMISE and we don't need TRY-CATCH loop to CONSUME PROMISE
            const promiseSix = new Promise(function(resolve){
                setTimeout(function(){
                    resolve('User data received')
                }, 5000)
            });

            //uisng async / await
            async function showUserData() {
                console.log('Fetching user data...');       //this will print 5sec before and then remaining content will print

                const data = await promiseSix

                console.log(data);
                console.log('Task completed!')
            }
            showUserData();


//USING Promise[with async/await] & fetch() method FOR ApiRequest:

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const dataConverted = await response.json();       // converting api data into array of objects form
        console.log(dataConverted);     
        console.log(dataConverted.name);    //Wrong approach to print list of names. //this will give undefined because 'dataConverted' is array of objects and we can't access property of object directly from array// we need to use loop or map method to access property of object inside array
        console.log(dataConverted.map((user) => user.name)); //Correct //this will give array of names
        console.log(dataConverted[0].name);     //will print 1st index name only (Leanne Graham)
    } catch (error) {
        console.log('E: ', error)
    }
}
getAllUsers();


//USING PROMISE[with .then() and .catch() method] & fetch() method FOR ApiRequest:

fetch('https://api.github.com/users/hiteshchoudhary')       // Fetching user data from GitHub API using fetch()
.then((response) => {
    return response.json();     // .then() handles the response and converts it to JSON
})
.then((data) => console.log(data))     // Second .then() logs the user data to the console
.catch((error) => console.log(error))  // .catch() handles any errors that occur during the request