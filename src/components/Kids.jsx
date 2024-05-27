import React from 'react'
import './Kids.css'
import { WomenItems } from './WomenItems'
export const Kids = ({allProduct,BannerKids}) => {
 
  return (
   <>
    <div className="items">
   <div className="banner">
    <img src={BannerKids}  />
   </div>
  <div className="women">
  {allProduct.map(product=>(
    <WomenItems key={product.id} items={product}/>
   ))}
  </div>
   </div>
   </>
  )
}
