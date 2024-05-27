import React from 'react'
import './BreadCrum.css'
import ArrowPng from '../Assets/breadcrum_arrow.png'
export const BreadCrum = ({product}) => {
  console.log(product)
  return (
    <>
    <div className="breadcrum">
    HOME <img src={ArrowPng}/> SHOP <img src={ArrowPng}/> {product.category.toUpperCase()} <img src={ArrowPng}/> {product.name} 
    </div>
    </>
  )
}
