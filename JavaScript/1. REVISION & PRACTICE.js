for (let i = 10; i <= 20; i++) {
    if (i == 15) {
        console.log(`15 detected`)
    }
    const element = i;
    console.log(element)
    
}

const letArr = ['bat', 'ball']
for (let i = 0; i < letArr.length; i++) {
    const element = i;                      //print (keys) only
    const element1 = letArr[i]              //print (values)
   // console.log(element)
    //console.log(element1)    
    console.log(`${i} index of ${letArr[i]}`)               
}

const myObj = {
    name: 'pawan',
    surname: 'yadav'
}
for (let i = 0; i < Object.keys(myObj).length; i++) {
    const element = i;
    console.log(i)

    const element1 = Object.values(myObj)
    console.log(element1)
}

const user = {
  name: "Pawan",
  age: 22,
  city: "Varanasi"
};

for (const key in user) {
  console.log(key, ":", user[key]);
}