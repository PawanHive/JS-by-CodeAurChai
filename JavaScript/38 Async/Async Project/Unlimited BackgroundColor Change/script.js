// generate a random background color:

// function getRandomHexColor() {
//     // Generate a random number between 0 and 0xFFFFFF
//     let randomNumber = Math.floor(Math.random() * 16777215);
//     // Convert the number to hexadecimal and pad with zeros if needed
//     let hexColor = "#" + randomNumber.toString(16).padStart(6, "0");
//     return hexColor;
// }

// // Test: log a random color
// console.log(getRandomHexColor());


const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
//console.log(randomColor())

let intervalId;

function changeBgColor () {
        document.body.style.backgroundColor = randomColor();
    }

document.querySelector('#start').addEventListener('click', function(){
    //intervalId = setInterval(changeBgColor, 2000);      //this line need minor changes, because if we accidently click start buttom multiple times, then multiple interval start and then as an outcome you will background color change more frequent than(per 2sec)...because multiple interval start...below line will fix this problem:
    if(!intervalId) {                                   // actually (intervalId = undefined) means false but, as here (!intervalId → true)
        intervalId = setInterval(changeBgColor, 2000);
    }

})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId = null;      //Stops the currently running timer (using the stored ID).   //Sets intervalId to null → making it falsy again.     //So the next time you press “Start”, //!intervalId is true, and a new interval can start safely.


})



/*
if getting confuse then refer: CSE JS Note(codeaurchai) > Heading > Unlimited BackgroundColor Changer
*/