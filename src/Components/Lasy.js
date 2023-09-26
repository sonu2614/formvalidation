import React, { useState } from 'react'

// function hello(){
//     console.log("Hey I am inside use State")
//     return 100
// }

const Lasy=()=> {
    // const [count,setCount]=useState(hello());
    const [count,setCount]=useState(()=>{
        console.log("Hey i am inside useState")
        return 100;
    })
  return (
    <div>
        <h1>hey value is ={count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default Lasy