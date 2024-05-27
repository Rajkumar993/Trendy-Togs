import React, { useState } from 'react'
import './Newsletter.css'



export const NewsLetter = () => {
 const[input,setInput] = useState('');
 const[message,setMessage]=useState('');

  return (
    <>
    <div className="NewsContainer">
     <h2> Get Exclusive Offers On Your Email</h2>
     <p>Subscribe to our newsletter and stay updated</p>
     
     <form className="inputs"  onSubmit={(e)=>{
         e.preventDefault()
         if(input==''){
          setMessage('Please enter a valid email')
         } else{
          setMessage('')
          alert('Thanks For Subscribing')
         setInput('')
         }
          
      
     }}>
     <input type='email' placeholder='Enter Your Email id' value={input}  onChange={(e)=>{
      setInput(e.target.value)
     }}/>
     
     <button>Subscribe</button>
     
     </form>
     {message && <p style={{color:"red"}}>{message}</p>}
    </div>

    </>
  )
}
