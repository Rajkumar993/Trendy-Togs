import React from 'react'
import { WomenItems } from './WomenItems'

export const RelatedProducts = (allProduct) => {
 console.log(allProduct)
  return (
   <>
     <div className="items"  >
 <div className='heading'>  
 <h2>Related Products</h2>
 </div>
<div className="women">
{allProduct.allProduct.map(item=>(
    <WomenItems key={item.id} items={item}/>
   ))}
</div>
</div>
   </>
  )
}
