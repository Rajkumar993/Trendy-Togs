import React, { useState }  from 'react'
import './AddToCart.css'
import CrossIcon from '../Assets/cart_cross_icon.png'
import { toast } from 'react-toastify'
export const AddToCart = ({cart,setCart}) => {

const [place,setPlace]=useState(false)

 function btnInc(id){
 const newCart= cart.map(i=>{
    if(i.product.id==id){
       if(i.qty<5){
        i.qty++
       }
    }
    return i
  }
  
  )
  setCart(newCart) 
 }
 function btnDec(id){
  const newCart= cart.map(i=>{
    if(i.product.id==id){
       if(i.qty>1){
        i.qty--
       }
    }
    return i
  }
  
  )
  setCart(newCart) 
 }


function handlePlace(){
  setPlace(true);
  setCart([])
  toast.success('Your Order Placed Successfully',{
    position:'top-right',
    className:'tos'
  })
}


  function handleDelete(id){
  const newCart= cart.filter(list=>(
    list.product.id !=id
   ))

   setCart(newCart)
  }
  localStorage.setItem('product',JSON.stringify(cart))

  return (
    <>
   { cart==''?<h2 className='no'>YOUR CART IS EMPTY</h2>:<div className='cartContainer'>
   <table>
    <thead>
      <th>Products</th>
      <th>Title</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
      <th>Remove</th>
    </thead>
    <tbody>

        {cart.map(item=>(
          <tr key={item.product.id}>
          <td><img src={item.product.image} alt="" /></td>
          <td className='titel'>{item.product.name}</td>
          <td className='price1'><span>$</span>{item.product.new_price}</td>
          <td className='Quan'><button className='inc' onClick={()=>btnInc(item.product.id)}>+</button><input className='inp' value={item.qty} type="text" /><button className='dec' onClick={()=>btnDec(item.product.id)}>-</button></td>
          <td className='price'><span>$</span>{item.product.new_price*item.qty}</td>
          <td className='close'><img className='cross' src={CrossIcon} alt="" onClick={()=>{handleDelete(item.product.id)}} /></td>
          </tr>
        ))}
      
   
    </tbody>
   </table>
   <div className="cartTotal">
    
 <div className="amt">
 <h2>Cart Total</h2>
 <div className="subtotal">
   <p>Sub Total</p>
   <p><span>$</span>{cart.reduce((acc,ind)=>(acc +=ind.qty*ind.product.new_price),0)}</p>
    </div>
    <div className="shipping">
    <p>Shipping Fee</p>
   <p>Free</p>
    </div>
    <div className="total">
    <p>Total</p>
   <p><span>$</span>{cart.reduce((acc,ind)=>(acc +=ind.qty*ind.product.new_price),0)}</p>
    </div>
 </div>
 <div className="coupon">

 <div className="hi">  
 
  <input type="text" placeholder='Enter Coupon Code' id='ccc' />
    <button>Submit</button>
    </div>
   <p className='code'> if you have coupon code please enter for offers!</p>
   </div>
   </div>
   <div className="placeOrder">
    <button onClick={handlePlace}>Place Your Order</button>
   </div>
    </div>}
   
    </>
  )
}
