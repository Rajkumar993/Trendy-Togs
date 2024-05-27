import React from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import { BreadCrum } from './BreadCrum';
import { DisplayProduct } from './DisplayProduct';
import { RelatedProducts } from './RelatedProducts';
export const Product = ({allProduct,cart,setCart,qty,setQty}) => {
  console.log(qty)
    const {id}=useParams();
    const product=allProduct.find((e)=>e.id==id)
  
  return (
    <>
    <BreadCrum product={product}/>
    <DisplayProduct product={product} cart={cart} setCart={setCart} qty={qty} setQty={setQty} />
    <RelatedProducts allProduct={allProduct.filter(item=>(item.category==product.category))}/>
    </>
  )
}
