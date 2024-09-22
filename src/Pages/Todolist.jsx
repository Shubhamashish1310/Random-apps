import  { useState } from 'react'

function Todolist() {
    const[task,settask]=useState("");
    const[arr,setarr]=useState([]);
const[col,setcol]=useState("black")
    function edits(index){
let news = window.prompt("edit:",arr[index])
if(news){
    let np=[...arr]
    np[index]=news;
    setarr(np)
}

    }
    function deletes(index){
      setarr(arr.filter((_,i)=>i!=index));
    }
    function handlechange(e){
        settask(e.target.value)
    }
    function handleclick(){
        if(task.trim()){
setarr([...arr,task])
settask("");
    }
}
  return (
    <div className={`bg-${col} w-screen h-screen`}  >
        <h1>TO-DO-LIST</h1>
        <div>
            <button onClick={()=>setcol(col=="white"?"black":"white")} className='rounded-xl bg-gray-800 h-12 w-20'>theme</button>
            <input type="text"
            className='border-neutral-950 border'
            value={task}
            placeholder='Enter Todo'
            onChange={handlechange}
             />
             <button onClick={handleclick}>Add</button>
        </div>
        <ul>
          {arr.map((item,index)=>{
           return <li  className='flex justify-between w-64 bg-red-200' key={index}>{item}
           <button onClick={()=>deletes(index)}>delete</button>
           <button onClick={()=>edits(index)}>edit</button>
           </li>
           
          })}
          
        </ul>
    </div>
  )
}

export default Todolist