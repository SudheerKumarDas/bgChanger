import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
            <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
                  <div className='flex flex-wrap justify-center bg-white rounded-3xl shadow-lg px-3 py-2 gap-3'>
                    <button onClick={()=>setColor("red")} className='cursor-pointer outline-none px-2 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"red"}}>
                      Red
                    </button>

                    <button onClick={()=>setColor("green")} className='cursor-pointer outline-none px-2 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"green"}}>
                      Green
                    </button>

                    <button onClick={()=>setColor("blue")} className='cursor-pointer outline-none px-2 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"blue"}}>
                      Blue
                    </button>

                    <button onClick={()=>setColor("olive")} className='cursor-pointer outline-none px-2 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"olive"}}>
                      Olive
                    </button>

                    <button onClick={()=>setColor("gray")} className='cursor-pointer outline-none px-2 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:"gray"}}>
                      Gray
                    </button>

                    <button onClick={()=>setColor("yellow")} className='cursor-pointer outline-none px-2 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:"yellow"}}>
                      Yellow
                    </button>

                    <button onClick={()=>setColor("pink")} className='cursor-pointer outline-none px-2 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:"pink"}}>
                      Pink
                    </button>

                    <button onClick={()=>setColor("purple")} className='cursor-pointer outline-none px-2 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"purple"}}>
                      Purple
                    </button>

                    <button onClick={()=>setColor("lavender")} className='cursor-pointer outline-none px-2 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:"lavender"}}>
                      Lavender
                    </button>

                    <button onClick={()=>setColor("white")} className='cursor-pointer outline-none px-2 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:"white"}}>
                      White
                    </button>

                    <button onClick={()=>setColor("black")} className='cursor-pointer outline-none px-2 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"black"}}>
                      Black
                    </button>

                  </div>
            </div>
      </div>
    </>
  )
}

export default App
