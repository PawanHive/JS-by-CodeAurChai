


//==> this is simple (foreach) loop
const coding = [ 'js', 'ruby', 'java', 'python', 'cpp']

coding.forEach((item) => {
    console.log(item);
});

//(foreach) loop never give you the RETURN VALUE:
//==>
const coding1 = [ 'js', 'ruby', 'java', 'python', 'cpp']

const code = coding1.forEach((item) => {             //here we are trying to RETURN (foreach) loop value in variable (code), but it will give undefined. [because (foreach loop) never RETURN the value] 
    //console.log(item);
    //return item                             //RETURN statement will not work for (foreach loop)...giving ('undefined' as output) ... it a rule (foreach loop) never RETURN VALUES.
});
console.log(code)
//Output:
// js
// ruby
// java
// python
// cpp
// undefined            //getting (undefined) because (foreach loop) never RETURN the values

//---------------------------------------------------------------------------------------------------------------------

//+++++++++++++++++++++++++++++++++ filter ++++++++++++++++++++++++++++++++++++++++++++++++++++

//Use of (filter):
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myNums.filter((num) => (num > 4))                 //print noting, because (filter) RETURN value, and to store that we need variable

//==> to RETURN value using variable to store it:
const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 = myNums1.filter( (num) => (num > 4))      //SYNTAX: () => ()    //one more thing here we use IMPLICIT RETURN ARROW FUNCTION. 
console.log(newNums1)
//Output: [ 5, 6, 7, 8, 9, 10 ]

    //==> here using EXPLICIT RETURN ARROW FUNCTION( ..note that we have to use braces{} and RETURN-Statement in it)
        const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        const newNums2 = myNums2.filter( (num) => {         //SYNTAX: () => { return }
            return num > 7                                  
        })                                                  
        console.log(newNums2)
        //Output: [ 8, 9, 10 ]

//here (foreach loop) can also do what (filter) did above, using (if-statement) ...like returning value:
const myNums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums3 = []
myNums3.forEach( (num) => {
    if (num > 7) {
        newNums3.push(num)
    }
})      
console.log(newNums3)
//Output: [ 8, 9, 10 ]
//NOTE: this (foreach loop) code is being more logical to print same RETURN what (filter) do in few lines

//----------------------------------------------------------------------------------------------------------------
//here more example of (filter) usecse:
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

                //suppose user filtering for 'history' kind of book
const userBooks = books.filter( (bk) => (bk.genre === 'History') )              //books of 'history' genre
console.log(userBooks)
//Output:
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]

                //Now suppose use want which published after "2000"
const userBooks2000 = books.filter( (bk2000) => (bk2000.publish > 2000) )       //books published after 2000
console.log(userBooks2000)
//Output:
// [
//   {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   }
// ]
    

        //==> same like above code (only using EXPLICIT RETURN ARROW FUNCTION)
            const userBook1995 = books.filter( (bk1995) => { return bk1995.publish > 1995} )       //SYNTAX: () => {return}
            console.log(userBook1995)
            //output will be similar like above.


                //now suppose user want filter 'History' genre book which published after 1995
const userBookHistory1995 = books.filter( (bkhis1995) => {
    return bkhis1995.genre === 'History' && bkhis1995.publish >= 1995
})
console.log(userBookHistory1995)
//Output:
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   }
// ]