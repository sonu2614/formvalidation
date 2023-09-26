import React, { useState } from 'react'

const Formvalidation = () => {
    const[user,setUser]=useState({name:"", email:"", age:"", password:"", confirmpass:""})
    const[error,setError]=useState("");
    const [success,setSuccess]=useState("")
    const {name,email,age,password,confirmpass}=user;

    function submitForm(e){
        e.preventDefault()

        // if(!user.name || !user.email || !user.age || !user.password || user.confirmpass){
        //     alert("Please fill all the fields")
        //     return
        // }
        if(!name || !email || !age || !password || !confirmpass){
            //alert("Please fill all the fields")
            setError("Please fill all the fields")
            setSuccess("")
            return
        }
        if(name.trim().includes(" ")==false){
            //alert("Name should be atleast 2 words")
            setError("Name should be atleast 2 words")
            setSuccess("")
            return
        }
        if(email.includes("@")==false){
            // alert("Email should be Vailid")
            setError("Email should be Vailid")
            setSuccess("")
            return
        }
        if(password.length<8){
            // alert("Password should be atleast 8 character long")
            setError("Password should be atleast 8 character long")
            setSuccess("")
            return
        }
        if(password!=confirmpass){
            // alert("Pasword and confirm password should match")
            setError("Pasword and confirm password should match")
            setSuccess("")
            return
        }
        // alert("From submitted Successfully")
        setSuccess("From submitted Successfully")
        setError("")


    }

    console.log(user)

  return (
    <div>
        {
            error && <h3 style={{color:"red"}}>{error}</h3>
        }
        {
            success && <h3 style={{color:"green"}}>{success}</h3>
        }
        <form onSubmit={submitForm}>
        <input type='text' placeholder='Enter your name'
        onChange={e=>setUser({...user,name:e.target.value})}/>

        <input type='email' placeholder='Enter your email' 
        onChange={e=>setUser({...user,email:e.target.value})}/>

        <input type='number' placeholder='Enter your age' min={1} max={100} 
        onChange={e=>setUser({...user,age:e.target.value})}/>


        <input type='password' placeholder='Enter your password'
        onChange={e=>setUser({...user,password:e.target.value})} />

        <input type='password' placeholder='Confirm your password' 
        onChange={e=>setUser({...user,confirmpass:e.target.value})} />
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Formvalidation