
import React, { createContext, useRef, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Shop } from './components/Shop'

import { Men } from './components/Men'
import { Women } from'./components/Women'
import { Kids } from './components/Kids'
import all_product from './Assets/all_product.js'
import data_product from './Assets/data.js'
import new_collections from './Assets/new_collections.js'
import { Footer } from './components/Footer.jsx'
import BannerMen from './Assets/banner_mens.png'
import BannerWomen from './Assets/banner_women.png'
import BannerKids from './Assets/banner_kids.png'
import { Product } from './components/Product.jsx'
import { Login } from './components/Login.jsx'
import { AddToCart } from './components/AddToCart.jsx'
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Data=createContext()


function App() {
  const[data,setData]=useState(data_product);
  const[allProduct,setAllProduct]=useState(all_product);
const[collection,setCollection]=useState(new_collections);
const [cart,setCart]=useState([]);
const[qty,setQty] =useState(1)

const ScrollRef=useRef(null);

function scrollToTop(){
  ScrollRef.current.scrollIntoView({ behavior: 'smooth'})
}
  return (
    <>
    <Data.Provider value={{data,setData,allProduct,setAllProduct,collection,setCollection}}>
    <BrowserRouter>
    <ToastContainer theme='dark'/>
   <Header ScrollRef={ScrollRef} cart={cart}/>
   <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<Men allProduct={allProduct.filter(product=>(product.category=='men'))} BannerMen={BannerMen}/>}/>
        <Route path='/women' element={<Women allProduct={allProduct.filter(product=>(product.category=='women'))} BannerWomen={BannerWomen}/>} />
         <Route path='/kids' element={<Kids allProduct={allProduct.filter(product=>(product.category=='kid'))} BannerKids={BannerKids}/>}/>
         <Route path='/product' element={<Product qty={qty} setQty={setQty} allProduct={allProduct} cart={cart} setCart={setCart} />}>
          <Route path=':id' element={<Product />} />
         </Route>
         <Route path='/login' element={<Login cart={cart}/>}/>
         <Route path='/cart' element={<AddToCart  cart={cart} setCart={setCart} />}/>
        
       </Routes>
       <Footer  scrollToTop={scrollToTop} />
   </BrowserRouter>
    </Data.Provider>
 
    </>
  )
}

export default App
