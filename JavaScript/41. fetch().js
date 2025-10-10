//++++++++++++++++++ fetch() +++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++++++++++++++ WHAT IS fetch() ++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
🌍 What is fetch()?:-
fetch() is a modern JavaScript built-in function used to make network requests (usually to servers or APIs).

It allows your JavaScript code (running in a browser or Node.js) to communicate with external data sources 
— for example:
    ==> getting data from a server (like weather info, user details, etc.),
    ==> sending form data,
    ==> or updating information on a database.
*/

//++++++++++++++++++++++++++++++++++++ DEFINITION OF fetch() +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
📘 Definition:-
fetch() is a Web API method that starts a network request and returns a Promise that resolves to the Response object representing the result of that request.

In simple words:
👉 “fetch() is used to get (or send) data between your website and a server asynchronously.”
*/

//++++++++++++++++++++++++++++++++++++++++++ PURPOSE OF fetch() +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
🎯 Purpose of fetch()

    ==> To retrieve (GET) data from a remote server (like an API endpoint).
    ==> To send (POST, PUT, DELETE) data to a server (like submitting a form).
    ==> To communicate asynchronously — means your webpage won’t freeze or reload while waiting for a server response.
*/

//+++++++++++++++++++++++++++++++++++++++++++ WHEN & WHERE to use fetch() +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
⏰ When & Where to Use fetch()
✅ Use fetch() when:

    ==> You want to get data from an API (like weather, user info, news, etc.).
    ==> You want to send data to a server without refreshing the page.
    ==> You want to build real-time, dynamic, or interactive web apps.

🧩 Where it’s used:

    ==> In browsers (front-end JavaScript)
    ==> In Node.js (with node-fetch or built-in fetch in Node 18+)
    ==> Inside async functions or event handlers (e.g., when a button is clicked)
*/

//++++++++++++++++++++++++++++++++++++++++++ WHY fetch() IS POWERFUL ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

/*
💡 Why fetch() is Powerful:

    ==> Promise-based → Easier to handle async code (with .then() or async/await)
    ==> Native in modern browsers → No need for extra libraries like XMLHttpRequest or axios
    ==> Lightweight and clean syntax
    ==> Works with many HTTP methods (GET, POST, PUT, DELETE, PATCH)
    ==> Supports JSON, forms, images, text, etc.
    ==> Can handle errors gracefully with .catch() or try...catch
 */

//+++++++++++++++++++++++++++++++++++ CONCEPT: HOW fetch() WORKS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
🧠 Concept: How fetch() Works

When you call fetch(url):

    ==> JavaScript sends a network request to the specified url.
    ==> It doesn’t block the rest of your code (it’s asynchronous).
    ==> The browser gets the Response object once the server replies.
    ==> You use methods like .json() or .text() on the Response to read the data.
    ==> You handle success or errors using .then() / .catch() or async/await.
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++ SYNTAX +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

fetch(URL, options)

    //==> URL:- The endpoint you want to connect to
    //==> options (optional):- An object containing request details (method, headers, body, etc.)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ EXAMPLE.1: Basic GET request +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())  // C
// onvert response to JSON
.then(data => console.log(data))     // Log the fetched data
.catch(error => console.error('Error:', error))  // Handle any errors

            //Explaination of above code:
            /*
            The first .then() waits for the server to respond.
            The response.json() converts raw response into usable JSON data.
            The second .then() handles that JSON data.
            .catch() handles any network or parsing errors.
            */

//++++++++++++++++++++++++++++++++++++++++++++++ EXAMPLE.2: POST request (Sending Data) ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',                         //HTTP method
    headers: {
        'Content-Type': 'application/json'  //Telling server we're sending JSON
    },
    body: JSON.stringify({
        title: 'My New Post',
        body: 'Learning fetch() in JS',
        userId: 1
    })
})
.then(response => response.json())      //Convert response to JSON
.then(data => console.log(data))        // See what the server responded
.catch(error => console.log('Error:', error)) // Handle errors

            //Explaination of above code:
            /*
            ==> method: 'POST' means we’re sending data.
            ==> headers specify what kind of data is being sent.
            ==> body contains the actual data (must be a string, so we use JSON.stringify()).
            */

//++++++++++++++++++++++++++++++++++++++++++++++ EXAMPLE.3: Using async/await with fetch() (MODERN CLEAN STYLE) ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}
getUserData();

            //Explaination of above code:
            /*
            ==> async function allows us to use await inside it.
            ==> await pauses execution until the fetch() promise resolves.
            ==> try...catch handles any errors that might occur during the fetch or parsing.
            */

//++++++++++++++++++++++++++++++++++++++++++++++ Common HTTP Methods Used with fetch() ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Method & Purpose:

GET ==> Retrieve data (default method)
POST ==> Send data to server
PUT	==> Update existing data
DELETE ==> Remove data
PATCH ==> Partially update data
*/

//++++++++++++++++++++++++++++++++++++++++++++++ Step-by-Step Flow of fetch() ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
                                    Your JS Code
                                        |
                                        | 1️⃣ You call fetch("https://api.example.com/data")
                                        |
                                        ▼
                                    Browser starts a network request (asynchronously)
                                        |
                                        | 2️⃣ JS doesn't wait → it moves on with next lines of code
                                        |
                                        ▼
                                    Server receives request → processes it → sends back a response
                                        |
                                        ▼
                                    Browser receives the response
                                        |
                                        | 3️⃣ fetch() Promise is fulfilled → gives you a Response object
                                        |
                                        ▼
                                    Your code handles that response using .then() or async/await
                                        |
                                        ▼
                                    response.json() (or .text(), .blob()) reads and converts data
                                        |
                                        ▼
                                    You now have usable JavaScript data (object/array)
*/

//++++++++++++++++++++++++++++++++++++++++++++++ Analogy: 'Restaurant Example' ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Imagine your JS code is a customer ordering food.

Step	            Real Life	                                    In JavaScript

1	            You place an order	                             fetch() sends request
2	            You do other things                           while waiting	JS continues running (async)
3	            Waiter brings the food	                         Server sends a response
4	            You open the box	                           .json() converts response
5	            You eat it	                                    You use/display data in JS
*/