import React, { useState } from 'react'

const AsyncUseState = () => {
    const [count,setCount]=useState(0)

    function increase(){
        setCount(count+1)
        setCount(count+1)
    }
    function increase2(){
        setCount((count)=>count+1)
        setCount((count)=>count+1)
    }
    function increase3(){
        setCount(()=>{
            console.log("count1",count)
            return count+1
        })
        setCount(()=>{
            console.log("count2",count)
            return count+1
        })
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={increase2}>Increase</button>
    </div>
  )
}

export default AsyncUseState