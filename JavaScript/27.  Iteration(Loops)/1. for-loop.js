//++++++++++++ for ++++++++++++++++

for (let index = 0; index < 10; index++) {
    const element = index ;
   // console.log(element)
}

//==> Print No. from 1-10:
for (let i = 1; i <= 10; i++) {          //ctrl + d (multi cursor selection at once like  "index")
    const element = i ;
    console.log(element)
}

//==> Print (5 is best number):
for (let i = 1; i <= 10; i++) {          //ctrl + d (multi cursor selection at once like  "index")
    const element = i ;
    if (element == 5) {
        console.log('5 is best number')
    }
    console.log(element)
}


for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value: ${i}`)
    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop value: ${j} and inner loop ${i}`)        
    }
    
}

//==> print table:
for (let i = 1; i <= 10; i++) {
    console.log(`table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
}

//==> For-Loop on ARRAY:

let myArray = ['flash', 'batman', 'superman']           //this is array
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {              //remember into array don't use (=) while comparison 
    const element = myArray[index];
    console.log(element)
}


//-------------------------------------------------------------------------------------------------------
// Use of (break;) and (continue;) in for-loop:

// Use of (break;):
for (let index = 0; index <= 20; index++) {
    if (index == 5) {                               // when this condition will, it will work
        console.log(`Value of i is ${index} and it a favourite number`)
        break;                                      // code execution will stop at (==5), no further code will excecute
    } 
    console.log(`Value of i is ${index}`)
    
}

// Use of (continue;):
for (let index = 0; index <= 20; index++) {
    if (index == 5) {                               // when this condition will, it will work
        console.log(`Value of i is ${index} and it a favourite number`)
        continue;                                   //after if condition being true, code will also execute further
    } 
    console.log(`Value of i is ${index}`)
    
}