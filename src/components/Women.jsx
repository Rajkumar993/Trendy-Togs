import React from 'react'
import { WomenItems } from './WomenItems'

export const Women = ({allProduct,BannerWomen}) => {
  return (
    <>
   <div className="items">
   <div className="banner">
    <img src={BannerWomen}  />
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
