import React from 'react'
import ExclusiveImg from '../Assets/exclusive_image.png'
import './Offer.css'
export const Offer = () => {
  return (
    <>
    <div className="offerContainer">
      <div className="offerLeft">
        
        <h2>Exclusive Offers For You</h2>
         <p>ONLY ON BEST PRODUCTS</p>
         <button> Check Now</button>
      </div>
      <div className="offerRight">
     <img src={ExclusiveImg} alt="" />
      </div>
    </div>
    </>
  )
}
