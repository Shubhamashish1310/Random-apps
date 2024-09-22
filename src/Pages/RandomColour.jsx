import  { useState } from 'react'
import { Link } from 'react-router-dom'

function RandomColour() {

const[col,setcol]=useState("#000")

function random(){
 let a = Math.random()*2560
 return Math.floor(a)
}
  function handleclick(){
    
      setcol(`#${random()}`)
    
    console.log(col)
  }
  return (
    <div style={{background:col}} className='h-screen w-screen'>
      <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center font-bold text-3xl bg-amber-400 text-gray-700'>Random Colour Generator</h1>
      <button className='h-16 w-24 rounded-xl font-semibold bg-green-500'><Link to="/Home">Main Menu</Link></button>
      </div>
       
      <div className='flex h-screen w-screen justify-center items-center'>
     <button className='h-16 w-40 bg-orange-700' onClick={handleclick}>Click Me</button>
      </div>
    </div>
  )
}

export default RandomColour