
import './Shop.css'
import HeroImg from'../Assets/hero_image.png'
import arrowImg from '../Assets/arrow.png'
import { Popular } from './Popular'
import { useRef } from 'react'
import { Offer } from './Offer'
import { NewCollections } from './NewCollections'
import { NewsLetter } from './NewsLetter'


export const Shop = () => {

   const itemsRef=useRef(null)
   function scrollToItems(){
    itemsRef.current.scrollIntoView({ behavior: 'smooth' });
   }
  return (
    <>
   <div className="shop">
   <div className="shop-left">
   <p> NEW ARRAIVALS ONLY</p>
   <h2>
    New Collections For Everyone
   </h2>
  <button onClick={scrollToItems} >Latest Collections <img src={arrowImg} alt="" /></button>
   </div>
   <div className="shop-right">
    <img src={HeroImg}  />
   </div>
   </div>
   <Popular  />
   <Offer/>
   <NewCollections itemsRef={itemsRef}/>
   <NewsLetter/>
    </>
    
  )
  
}
