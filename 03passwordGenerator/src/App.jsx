import { useState , useCallback , useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow , setNumberAllow] = useState(false)
  const [charAllow , setCharAllow] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow){
      str += "0123456789"
    }

    if(charAllow){
      str += "!@#$%^&*()+-./:;<=>?@[]{}"
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  } , [length, numberAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-5 text-orange-500 bg-gray-700'>
        <h1 className='text-white font-bold text-center'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          onClick={copyPasswordToClipboard}/>

          <button className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input className='cursor-pointer' type="range" min={8} max={99} value={length}
            onChange={(e) => {setLength(e.target.value)}}/>

            <label>Length : {length}</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input className='cursor-pointer' type="checkbox" defaultChecked={numberAllow}
            onChange={() => {setNumberAllow((prev) = !prev)}}/>

            <label>Number</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input className='cursor-pointer' type="checkbox" defaultChecked={charAllow}
            onChange={() => {setCharAllow((prev) = !prev)}}/>

            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
