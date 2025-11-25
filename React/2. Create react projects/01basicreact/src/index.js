// import React from 'react';
import ReactDOM from 'react-dom/client';  //This import is used to render your React application to the real HTML DOM.

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);
 

/*
.createRoot
  “Make this HTML element controlled by React, and prepare it for rendering.”
  Without this, React cannot show anything on the screen.
*/

/*
React → Creates UI components

ReactDOM → Takes those components

createRoot → Creates a space in your HTML

render → Puts the component on the screen
*/

/*
BREAKDOWN OF WHAT (.render) DOES:

✔ 1. Converts JSX ( <App /> ) into Virtual DOM
React creates an internal representation of the UI.

✔ 2. Compares it with existing Virtual DOM
This is the diffing algorithm (fast).

✔ 3. Updates the actual HTML (Real DOM)
Only the changes are applied → no page reload.
*/

/*
⭐ SUPER-SIMPLE EXPLANATION
P
✔ createRoot()
Creates a box where React will work.

✔ .render()
Fills that box with your React component.
*/