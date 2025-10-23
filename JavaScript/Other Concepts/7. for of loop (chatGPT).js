/*
When to use for...of — detailed guide

for...of is the clean, modern way to loop over iterable values in JavaScript. 
Use it when you want to work with the values themselves (not indexes or keys). 
Below is everything useful you need to know: why, when, how, examples, pitfalls and alternatives.
*/

/*
✅ What for...of iterates

for...of works on iterables — things that implement the iterable protocol:

Arrays ([])
Strings ("hello")
Map and Set
NodeList and HTMLCollection returned by DOM queries
Generator results
Async iterables (with for await...of)
Any custom object that defines Symbol.iterator
It gives you each value in sequence.
*/

/*
🔸 Basic syntax:
*/
for (const value of iterable) {
  // use value
}

/*
+++++++++++++++++++++++++ 🔹 Simple examples:++++++++++++++++++++++++++++++++
*/

// 1. Array:
const arr = [10, 20, 30];
for (const x of arr) {
  console.log(x); // 10, 20, 30
}

// 2. String:
for (const ch of "hi") console.log(ch); // 'h' 'i'

// 3. Map (destructuring entries):
const map = new Map([['a',1], ['b',2]]);
for (const [k, v] of map) console.log(k, v); // 'a' 1, 'b' 2

// 4. DOM NodeList:
const items = document.querySelectorAll('li');
for (const li of items) console.log(li.textContent);        // will print text content of all li

// 5. Async iterable:
// example: stream of async values
for await (const chunk of asyncGenerator()) {
  console.log(chunk);
}

/*
👍 When to choose for...of

You only need values (not indexes).
You want readable code that’s easy to maintain.
You have an iterable (array, string, set, map, NodeList, generator).
You need to use break / continue / return control flow (works naturally inside for...of).
You want to destructure entries from a Map or arrays of pairs.
*/

/*
🔧 Advanced patterns
*/
//Get value + index:
for (const [i, val] of arr.entries()) { /* i = index */ }


//Iterate keys and values of Object:
for (const [k, v] of Object.entries(obj)) { /* use k and v */ }


//Using break / continue:
for (const v of arr) {
  if (v === 0) break;
  if (v < 0) continue;
  console.log(v);
}

//Using with generators:
function* gen() {
  yield 1;
  yield 2;
}
for (const n of gen()) console.log(n);

//Async iterable with for await...of:
async function readStream(stream) {
  for await (const chunk of stream) {
    console.log(chunk);
  }
}