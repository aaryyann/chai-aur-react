import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Black")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed justify-center bottom-12 inset-x-0 px-2 flex flex-wrap rounded-3xl '>

          <div className='flex flex-wrap justify-center gap-4 bg-white shadow-lg rounded-3xl px-3 py-2 '>

            <button onClick={() => setColor("red")} className='outline-none px-2 py-1 rounded-full' style={{backgroundColor:"red"}}>Red</button>

            <button onClick={() => setColor("blue")}  className='outline-none px-2 py-1 rounded-full' style={{backgroundColor:"blue"}}>Blue</button>

            <button onClick={() => setColor("green")}  className='outline-none px-2 py-1 rounded-full' style={{backgroundColor:"green"}}>Green</button>

            <button onClick={() => setColor("lavender")}  className='outline-none px-3 py-1 rounded-full' style={{backgroundColor:"lavender"}}>Lavender</button>

            <button onClick={() => setColor("olive")}  className='outline-none px-3 py-1 rounded-full' style={{backgroundColor:"olive"}}>Olive</button>

            <button onClick={() => setColor("black")}  className='outline-none px-3 py-1 rounded-full' style={{backgroundColor:"black"}}>Black</button>

            <button onClick={() => setColor("yellow")}  className='outline-none px-3 py-1 rounded-full' style={{backgroundColor:"yellow"}}>Yellow</button>

            <button onClick={() => setColor("pink")}  className='outline-none px-3 py-1 rounded-full' style={{backgroundColor:"pink"}}>Pink</button>

            <button onClick={() => setColor("purple")}  className='outline-none px-3 py-1 rounded-full' style={{backgroundColor:"purple"}}>Purple</button>

            <button onClick={() => setColor("gray")}  className='outline-none px-3 py-1 rounded-full' style={{backgroundColor:"gray"}}>Gray</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
