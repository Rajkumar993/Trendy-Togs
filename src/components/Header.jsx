
import './Header.css'
import Logo from '../Assets/logo.png'
import CartIcon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { Kids } from './Kids'
export const Header = ({ScrollRef,cart}) => {
const [shop,setShop]=useState(true);
const [men,setMen]=useState(false);
const [women,setWomen]=useState(false);
const [kid,setKid]=useState(false);
const [login,setLogin]=useState(false);
const [show,setShow]=useState(false);
  function hi(key){
    if(key=='login'){
      setShop(false)
      setMen(false);
      setWomen(false);
      setKid(false)
      setLogin(true)
    }
    if(key=='shop'){
      setShop(true)
      setMen(false);
      setWomen(false);
      setKid(false)
      setLogin(false)
    }
    if(key=='men'){
      setMen(true);
      setWomen(false);
      setKid(false)
      setShop(false)
      setLogin(false)
    }
    if(key=='women'){
      setWomen(true);
      setMen(false);
      setKid(false)
      setShop(false)
      setLogin(false)
    }
    if(key=='kid'){
      setKid(true)
      setMen(false);
      setWomen(false);
      setShop(false)
      setLogin(false)
    }if(key=='logo'){
      setShop(true)
      setMen(false);
      setWomen(false);
      setKid(false)
      setLogin(false)
    }
  }
  function handleShow(){
 setShow(!show)
  }
  return (
 <>
  <div className='container' ref={ScrollRef} >
    <div className="left">
      <div className="logo-container">
      <Link onClick={()=>{hi('logo')}} to={'/'}>  <img src={Logo} />
        <h3>Trendy Togs</h3></Link>
      </div>
    </div>
    <div className="middle">
      <nav>
        <ul>
        <li onClick={()=>{hi('shop')}}>
        <Link style={{backgroundColor:shop?'dodgerblue':'', color:shop?'white':'' }} to={'/'}>Shop</Link>
        </li>
        <li onClick={()=>{hi('men')}} >
        <Link style={{backgroundColor:men?'dodgerblue':'', color:men?'white':'' }} to={'/men'}>Men</Link>
        </li>
        <li onClick={()=>{hi('women')}} >
        <Link style={{backgroundColor:women?'dodgerblue':'', color:women?'white':'' }} to={'/women'}>Womens</Link>
        </li>
        <li onClick={()=>{hi('kid')}} >
          <Link style={{backgroundColor:kid?'dodgerblue':'', color:kid?'white':'' }} to={'/kids'}>Kids</Link>
        </li>
        </ul>
      </nav>
     
    </div> 
   
    <div className="right">
      <div className="login-cart">
  <Link to={'/login'}><button style={{backgroundColor:login?'dodgerblue':'', color:login?'white':'' }} onClick={()=>{hi('login')}}>Login</button></Link>
<div className="cart">
<Link to={'/cart'}><img src={CartIcon} alt="" /><p className='cartLength'>{cart.length}</p></Link>
</div>
      </div>
    </div>
    <div className="gg">
     <i class="fa-solid fa-bars" onClick={handleShow} ></i>
    </div>
    
  </div>
  <div className="middle2" style={{display:show?"block":"none"}}>
    <ul>
    <li onClick={()=>{hi('shop')}}>
        <Link style={{backgroundColor:shop?'dodgerblue':'', color:shop?'white':'' }} to={'/'}>Shop</Link>
        </li>
        <li onClick={()=>{hi('men')}} >
        <Link style={{backgroundColor:men?'dodgerblue':'', color:men?'white':'' }} to={'/men'}>Men</Link>
        </li>
        <li onClick={()=>{hi('women')}} >
        <Link style={{backgroundColor:women?'dodgerblue':'', color:women?'white':'' }} to={'/women'}>Womens</Link>
        </li>
        <li onClick={()=>{hi('kid')}} >
          <Link style={{backgroundColor:kid?'dodgerblue':'', color:kid?'white':'' }} to={'/kids'}>Kids</Link>
        </li>
    </ul>
  </div>
  </>
   
  )
  
  
}

