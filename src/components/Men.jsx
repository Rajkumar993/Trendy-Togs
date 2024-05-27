import React from 'react'
import { WomenItems } from './WomenItems'

export const Men = ({allProduct,BannerMen}) => {
 
  return (
   <>
   <div className="items">
   <div className="banner">
    <img src={BannerMen}  />
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
