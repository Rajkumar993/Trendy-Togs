import React from 'react'
import './WomenItems.css'
import { Link } from 'react-router-dom'
export const WomenItems = ({items}) => {

  return (
    <>
   <div className='img1'>

   <Link to={`/product/${items.id}`}><img src={items.image} onClick={window.scroll({top :0, behavior: 'smooth'})}  /></Link>
 
  
  <div className="productName">
  <p>{items.name}</p>
  </div>

<div className="para">
  
<p className='newItem'>${items.new_price}</p>
    <p className='oldItem'>${items.old_price}</p>
</div>
   
   </div>


    </>
  )
}
