import Message from './Message.jsx'

//-------------------- here we created component called App -------------------------------------

/*
Note:
In React: A component is simply a function that returns JSX
*/


//--------------------------- HERE WE CREATED VERY SIMPLE COMPONENT CALLED (App) ---------------------------------------

function App() {                           // React component name must start with capital letter like (App, Navbar, Header)
  return (
    <>
      <h1>Welcome to React with Vite</h1>
      <MyApp />                                  {/* ← USE IT HERE ---- this is below declared (MyApp) component*/}
      <Message />                                {/* imported from messages.jsx*/} 
      <Message />
      <Message />
    </> 
  );                                           
}


//------------------------------------- Now Try this Small JSX Practice --------------------------------------------

export function MyApp() {                   // as this is second component so to export it we have to add (export) keywords here only, because we can't use (export default) for both component...(export component, use only one time in whole App.jsx)
  // ⭐ THIS AREA = Component logic
  const user = 'Abhishek';
  const age = 20;

  // ⭐ THIS AREA = JSX return (UI)
  return (                                       // from here actually (JSX) part started...anything above return() section is basically a (JS execution area) or (component's logic area)
    <>                                           {/*this called react fragment*/}
      <h1>JSX Practice</h1>
      <p>Hello, my name is {user}</p>                {/*REMEMBER: anything inside {} is treated as JavaScript code, not plain text... mostly known as (JSX Expression Container) or (JS Expression in JSX) */}
      <p>My age is {age + 1}</p>
    </>
  );
}

//export default MyApp                              //WRONG PRACTICE: You can write multiple components in the same file, but you cannot export default two times.
export default App                           // we need to export App component, so we can use it in other files
