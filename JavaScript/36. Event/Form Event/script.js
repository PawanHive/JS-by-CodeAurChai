// // HERE WE WILL LEARN (focus()) and (blur()) EVENT:

// function changeBG(element) {            // this function will add bg color
//     element.style.background = 'lime';
// }
// function removeBG(element) {            // this function will remove bg color
//     element.style.background = '';
// }


// // --------------CHANGE BACKGROUND OF (Name) Input while fucus:-----------------------

// // document.getElementById('name').addEventListener('focus', function() {
// //     changeBG(this)
// // });
// // document.getElementById('name').addEventListener('focus', function(e) {
// //     changeBG(e.currentTarget)                                                // e.currentTarget = this = document.getElementById('name')
// // });
// document.getElementById('name').addEventListener('focus', function(e) {
//     changeBG(e.target)
// });

// // ----------------- NOW CHANGE BACKGROUND OF (Class) input while fucus: -------------------
// document.getElementById('class').addEventListener('focus', function(e) {
//     changeBG(e.currentTarget)                                                   // e.currentTarget = this = document.getElementById('class')
// })

// // --------------- NOW CHANGE BACKGROUND OF (country) Select while fucus: ---------------------
// document.getElementById('country').addEventListener('focus', function() {
//     changeBG(this)
// })


// // -------------- Remove background color which element was not triggered: --------------------
// document.getElementById('name').addEventListener('blur', function() {
//     removeBG(this)
// })
// document.getElementById('class').addEventListener('blur', function(e) {
//     removeBG(e.currentTarget)
// })
// document.getElementById('country').addEventListener('blur', function(e) {
//     removeBG(e.currentTarget)
// })

/*
| Property          | Meaning                                                              | When to use                                                              |
| ----------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `e.target`        | The **actual** element that triggered the event (may be a child).    | When you want to know what was clicked or focused inside a parent.       |
| `e.currentTarget` | The **element that has the event listener** attached.                | When you want to access the element handling the event (the “listener”). |
| `this`            | Same as `e.currentTarget` only in **regular functions** (not arrow). | Okay for small code, but less reliable in modern JS.                     |

*/


//**************************** MOST OPTIMIZED CODE OF SAME ABOVE****************** */

// function changeBG(element) {            // this function will add bg color
//     element.style.background = 'lime';
// }
// function removeBG(element) {            // this function will remove bg color
//     element.style.background = '';
// }

//     // Get all focusable elements at once
// const fields = document.querySelectorAll('#name, #class, #country')

//     // add both focus and blur listerers in a single loop
// fields.forEach((element) => {
//     element.addEventListener('focus', e => changeBG(e.currentTarget));
//     element.addEventListener('blur', e => removeBG(e.currentTarget));
// })
    /*
    | Reason          | Explanation                                                                      |
    | --------------- | -------------------------------------------------------------------------------- |
    | ✅ DRY principle | “Don’t Repeat Yourself” — one loop handles all elements.                         |
    | ✅ Scalable      | If you add more inputs later (like email, age, etc.), just update your selector. |
    | ✅ Readable      | Only one logical block — easy to understand at a glance.                         |
    | ✅ Efficient     | Only two small functions, and the event setup is minimal.                        |
    */
    
//********************** EXTRA-OPTIMIZED CODE OF SAME ABOVE */

    // if all your inputs are inside a form, you can attach ONE EVENT LISTENER TO THE FORM (event delegation)

    function changeBG(element) {            // this function will add bg color
    element.style.background = 'lime';
}
function removeBG(element) {            // this function will remove bg color
    element.style.background = '';
}

const form = document.querySelector('#form');

form.addEventListener('focus', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
        changeBG(e.target);         // e.target → the element that actually triggered the event (the <input> or <select> you focused)
    }
}, true)        // use capture phase (means capturing event (flow inword)) to catch focus

form.addEventListener('blur', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
        removeBG(e.target);
    }
}, true)
    // That's ultra-optimized -- no matter how many fields you form has, just two listeners handle everything.


