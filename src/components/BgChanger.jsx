import React, { useState } from 'react'

const BgChanger = () => {
    const [color,setColor]=useState("olive")
  return (
    <div className='w-full h-screen' style={{backgroundColor:color}} >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl'>
        <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"red"}}>
        Red
        </button>
        <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"blue"}}>
       Blue
        </button>
        <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"green"}}>
        Green
        </button>
        <button onClick={()=>setColor("Purple")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Purple"}}>
        Purple
        </button>
        <button onClick={()=>setColor("Black")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Black"}}>
        Black
        </button>
        <button onClick={()=>setColor("Orange")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Orange"}}>
        Orange
        </button>
          </div>
        </div>
    </div>
  )
}

export default BgChanger
