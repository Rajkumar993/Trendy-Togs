import React, { useContext } from 'react'

import './NewCollections.css'
import { Data } from '../App'
import { WomenItems } from './WomenItems'
export const NewCollections = ({itemsRef}) => {
  const {collection}=useContext(Data);

  return (
    <div className="items"  ref={itemsRef}>
 <div className='heading'>  
 <h2>NEW COLLECTIONS</h2>
 </div>
  <div className="women">
  {collection.map(item=>(
    <WomenItems key={item.id} items={item}/>
  ))}
  </div>
  </div>
  )
}
