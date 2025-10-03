//WITHOUT COMPARISON, CONDITION BEING TRUE OR FALSE:

const userEmail = 'pawan@gmail.com'         //consider TRUE

if (userEmail){                             //hamne comparison nhi kya lekin maan liya gaya ki string('pawan@gmail.com') TRUE value hai.(TRUTHY)
    console.log('Got user email');
} else {
    console.log('Dont have user email')
}
//Output: Got user email


//==>
const userEmail2 = ""                       // consider FALSE

if (userEmail2){                            //hamne comparison nhi kya lekin maan liya gaya ki empty string("") FALSE value hai.(FALSY)
    console.log('Got user email');           
} else {
    console.log('Dont have user email')
}
//Output: Dont have user email


//==>
const userEmail3 = []                         // consider TRUE

if (userEmail3){                              //hamne comparison nhi kya lekin maan liya gaya ki empty ARRY([]) TRUE value hai.(TRUTHY)
    console.log('Got user email');
} else {
    console.log('Dont have user email')
}
//Output: Got user email

//--------------------------------------------------------------------------------------------------------------------
// LIST OF FALSY and TRUTHY VALUES:

false, 0, -0, BigInt 0n, "", null, undefined, NaN
//NOTE: and except above list remaining all considered TRUTHY value automatically.

//some TRUTHY VALUE (you won't expect):
"0", 'false', " ", [], {}, function(){}

//--------------------------------------------------------------------------------------------------------------------
//HOW TO CHECK EMPTY ARRAY:
const Arr = []
if (Arr.length === 0) {             // from here check ARRAY is empty or not
    console.log('Array is empty');
}
//Output: Array is empty

//---------------------------------------------------------------------------------------------------------------
// HOW TO CHECK EMPTY OBJECT:
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {               // from here checking OBJECT is empty or not
    console.log('Object is empty')
}
//output: Object is empty

//-------------------------------------------------------------------------------------------------------------------
//NOTE: remember this is important for interview and competative programming
false == 0      //output: true
false == ''     //output: true
0 == ''         //output: true