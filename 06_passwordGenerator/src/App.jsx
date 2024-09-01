import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [number, setNumber] = useState(false)
  const [charecter, setCharecter] = useState(false)
  const [password, setpassword] = useState("")

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str += "0123456789"
    }
    if(charecter){
      str += "!@#$%^&*-+=[]{}~`"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, number, setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(()=>{
    passwordGenerator()
  }, [length, number, charecter,setpassword])

  return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-9 text-orange-500 bg-gray-800">
        <h1 className="text-center my-3">Password Generator</h1>
        <div className="flex shodow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref = {passwordRef}
          />
          <button className='outline-none text-white bg-blue-700 px-3 py-2 shrink-0'
          onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
               className='cursor-pointer'
               onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={number}
            id='numberInput'
            onChange={()=>{
              setNumber((prev)=> !prev)
            }}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div> 
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox" 
            defaultChecked={charecter}
            id='characterInput'
            onChange={()=>{ 
              setCharecter((prev) => !prev)
            }}
             />
             <label htmlFor="characterInput">Charecters</label>
         </div>
        </div>
      </div>
  )
}

export default App
