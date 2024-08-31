import './App.css'
import Card from './components/card'
import Cardtwo from './components/Cardtwo'

function App() {
  let myObj = {
    username: "arijit",
    age: 21
  }
 
  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl mb-2'>Tailwind test</h1>
      <Cardtwo username ="code-with-coffie" btnText = "click me to view"/>
      <Card username = "Arijit's Macbook" btnText = "visit me" />
    </>
  )
}

export default App
 