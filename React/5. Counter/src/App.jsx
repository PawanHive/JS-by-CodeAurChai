import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15);         // where 'counter' is created as a variable & 'setCounter' is function

  // let counter = 15;

  const addValue = () => {
    console.log("value added", counter);
    setCounter(counter => {
      if(counter < 20) {          // this counter will stop counter after reaches to 20
        return counter + 1;
      }
      return counter
    });
      
  }
  
  const removValue = () => {
    console.log("value removed", counter);
    setCounter(counter => {
      if(counter > 0) {               // this condition will stop counter just after 0
        return counter - 1;
      }
      return counter
    });
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
