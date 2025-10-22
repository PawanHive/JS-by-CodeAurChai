
// let printTime = setInterval(function () {
//     const time = new Date();
//     document.getElementById('time').innerText = time.toLocaleTimeString()
// }, 1000)

//Problem is: 
/*
Above code is not optimized because,:
    ==> Calling getElementById() inside setInterval() re-searches the DOM every second,
    ==> which is less efficient and unnecessary. Better to store the element once
    ==> and update it directly for cleaner and faster code.
*/

//---------------------------------------------------------------------------------------------------------

//NOW THIS ONE IS THE OPTIMIZED CODE:
const timeElement = document.getElementById('time');

setInterval(() => {
    let time = new Date();
    timeElement.textContent = time.toLocaleTimeString();
}, 1000);

