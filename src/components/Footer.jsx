
import './Footer.css'
import Logo_Big from '../Assets/logo_big.png'
import Insta from '../Assets/instagram_icon.png'
import Pintester from '../Assets/pintester_icon.png'
import Whatsapp from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'
export const Footer = ({scrollToTop}) => {




  return (
    <>
    <div className="footerContainer">
      <div className="footertop">
       <Link onClick={scrollToTop} to={'/'}><img src={Logo_Big} alt="" />
        <h2>Trendy Togs</h2></Link> 
      </div>
      <div className="footerMiddle">
        <p>Company</p>
     <Link onClick={scrollToTop} to={'/'}><p>Products</p></Link>   
        <p>Offices</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="footerBottom">
        <img src={Insta} alt="" />
        <img src={Pintester} alt="" />
        <img src={Whatsapp} alt="" />
      </div>
      <div className="copyRight">
        <p> 	&#169; copyright 2024 Rajkumar.All rights reserved</p>
      </div>
    </div>
    </>
  )
}
