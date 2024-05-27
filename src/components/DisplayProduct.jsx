import React, { useState } from 'react'
import './DisplayProduct.css'
import StarIcon from '../Assets/star_icon.png'
import StarDullIcon from '../Assets/star_dull_icon.png'
import { toast } from 'react-toastify'
export const DisplayProduct = ({product,cart,setCart,qty}) => {
 
function handleCart(){

 const itemExist= cart.find(li=>li.product.id==product.id)

 if(!itemExist){
  const newItem={product,qty}
  setCart([...cart,newItem])
  
  toast.success('Item Added To Cart',{
    className:'toast',
    position:"bottom-right",
    autoClose:2000,
   
  }
   
  )
 
 }
 
}
localStorage.setItem('product',JSON.stringify(cart))
  return (
 <>
 <div className="displayContainer">
 <div className='con' >
  <div className="displayLeft">
    <div className="verticalImgs">
      <img  src={product.image} alt="" />
      <img  src={product.image} alt="" />
      <img  src={product.image} alt="" />
      <img  src={product.image} alt="" />
    </div>
    <div className="BigImg">
      <img src={product.image} alt="" />
    </div>
  </div>
  <div className="displayRight">
    <div className="productName">
      <h2>{product.name}</h2>
    </div>
    <div className="starRating">
      <img src={StarIcon} alt="" />
      <img src={StarIcon} alt="" />
      <img src={StarIcon} alt="" />
      <img src={StarIcon} alt="" />
      <img src={StarDullIcon} alt="" />
      <p>(122)</p>
    </div>
    <div className="productPrice">
      <p>${product.new_price}</p>
      <p>${product.old_price}</p>
    </div>
    <div className="productDescription">
      <p>A lightweight usually knitted shirt, close fitting and with a round neckline and short sleeves, worn as undershirt or outter garment</p>
    </div>
    <div className="productSize">
      <p>Select Size</p>
      <button>S</button>
      <button>M</button>
      <button>L</button>
      <button>XL</button>
      <button >XXL</button>
    </div>
    <div className="cartBtn">
      <button onClick={()=>handleCart()} >Add to cart</button>
    </div>
    <div className="catogery">
    <p>category: {product.category} </p>
    </div>
  </div>
 </div>
 </div>
 
 </>
  )
}
