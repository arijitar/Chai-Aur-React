import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

//  let counter = 15
 const addValue = ()=>{
    // counter = counter + 1
    if(counter < 20){
      setCounter(counter + 1 )
      // setCounter((prevCounter)=> prevCounter + 1)
    }
    console.log("clicked", counter);
  
 }
 const removeValue = ()=>{
  //  counter = counter - 1
   if(counter>0){
   setCounter(counter - 1)
   }
   console.log("clicked", counter);
 }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value</button>
    </> 
  )
}

export default App
