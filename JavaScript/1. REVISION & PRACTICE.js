
// simple promise for resolve only:
// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Promise Created');
//         resolve();
//     }, 2000)
// })

// promiseOne.then(
//     console.log('promise consumed')
// )


// SECOND WAY TO CREATE THE PROMISE: 
// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Promise Created');
//         resolve();
//     }, 2000)
// }).then(
//     console.log('promise consumed')
// )

//-----------------------------------------------------------------------------------------------------

// 3rd way to create the Promise:
// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('promise created ');
//         resolve({username: 'pawan', emial: 'pawan@gmail.com'});
//     }, 2000);
// })
// promiseThree.then(() => {
//     console.log('promise consumed')
// })


//-----------------------------------------------------------------------------------------------------


// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
            
//         } else {
            
//         }
//     }, 2000);
// })

function hero() {
    console.log('hero')
}
hero()