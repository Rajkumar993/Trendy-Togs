import React, { useEffect, useRef, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export const Login  = () => {
  const [name,setName]=useState('')
  const [nameerr,setNameerr]=useState('')
  const [nameinp,setNameinp]=useState(false)
 const[email,setEmail] =useState('')
 const [message,setMessage]=useState('');
 const [error,setError]=useState(false);
 const [password,setPassword]=useState('');
 const [cpassword,setCpassword]=useState('');
 const [incorrect,setIncorrect]=useState('');
 const [errorpass,setErrorpass]=useState(false);
 const [navi,setNavi]=useState(false)
 const[passMsg,setPassMsg]=useState(false)
const[passErr,setPassErr]=useState(false)
 const Focus= useRef()
 useEffect(()=>{
  Focus.current.focus()

 },[])

 const handleEmail=(e)=>{
  setEmail(e.target.value) 
 }
  return (
   <>
  <div className="lc">
  <div className="logincontainer">
    <form onSubmit={(e)=>{
      e.preventDefault()
     
        function validateEmail(email){
          const matched=email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
          if(matched){
            setMessage('')
            setError(false)
          }else{
            setMessage('Invalid email formate');
            setError(true)
          }
          
        }
        
        validateEmail(email)
 
        if(name==''){
          setNameerr('Please fill the field')
          setNameinp(true)
        }else
        {
          setNameerr('')
        setNameinp(false)
        }
     
       if(password!=cpassword){
        setIncorrect('Invalid confirm password')
        setErrorpass(true)
        
       } else{
        setErrorpass(false)
       
       }
       if(password==''){
        setPassErr(true)
        setPassMsg(true)
       }else{
        setPassErr(false)
        setPassMsg(false)
       }
       if(name&&email&&password&&cpassword !=''   && cpassword==password){
      setNavi(true)
       }else{
        setNavi(false)
       }
       
       
     
    }}>  
      <h3>SignUp</h3>
     <div className="nameInput">
     <input  style={{border:nameinp?"2px solid red":'none'}} value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your Name' ref={Focus} />
     {nameerr &&  <p>{nameerr}</p>}
     </div>
    <div className="email">
    <input type="text" style={{border:error?"2px solid red":'none'}} value={email} onChange={handleEmail} placeholder='Your Email' />
     {message &&  <p>{message}</p>}
    </div>
   <div className="passwordInput">
  
   <input  value={password} style={{border:passErr?"2px solid red":'none'}}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'/>
   {passMsg && <p>please fill the field</p>}
  
      <input style={{border:errorpass?"2px solid red":passErr?"2px solid red":'none', marginTop:"20px"}} value={cpassword} onChange={(e)=>setCpassword(e.target.value)} type="password" placeholder='Confirm Password'/>
      {incorrect ?  <p>{incorrect}</p>:passMsg ? <p>please fill the field</p>:''}
   </div>
      <div className="frmBtn">
      {navi?<Link to={'/'}><button>Continue</button></Link>:<button>Continue</button>}
      </div>
      <div className="p">
      <p>Already have an account? <span>Login here</span></p>
      </div>
     <div className="checkbox">
     <input type="checkbox" id='check'/>
      <label htmlFor="check">By Continuing,i agree to the terms of use & priacy policy</label>
     </div>
    </form>
   </div>
  </div>
   </>
  )
}
