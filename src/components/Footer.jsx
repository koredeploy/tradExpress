import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import twitter from '../images/Vector (1).png'
import telegram from '../images/Vector (2).png'
import whatsapp from '../images/Vector (3).png'
import facebook from '../images/Vector (4).png'



const Footer = () => {
  return (
    <div className='footer container py-3'>
      <div className="column d-flex flex-column py-3">
        <Link className='w-100 text-black f-links mx-auto fw-bold text-decoration-none' to='/BuyAndSell'>Product</Link>
        <Link className='w-100 text-black f-links  text-decoration-none' to='/BuyAndSell'>Bitcoin</Link>
        <Link className='w-100 text-black f-links  text-decoration-none' to='/BuyAndSell'>Alt</Link>
        <Link className='w-100 text-black f-links  text-decoration-none' to='/BuyAndSell'>Fiat</Link>
        <Link className='w-100 text-black f-links  text-decoration-none' to='/BuyAndSell'>Refil</Link>
        <Link className='w-100 text-black f-links  text-decoration-none' to='/BuyAndSell'>P2P</Link>
      </div>

      <div className="column d-flex flex-column py-3">
        <Link className='w-100 text-black f-links  fw-bold text-decoration-none' to='/BuyAndSell'>Learn</Link>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'>Blog</Link>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'>Help Center</Link>
      </div>

      <div className="column d-flex flex-column py-3">
        <Link className='w-100 text-black f-links  fw-bold text-decoration-none' to='/BuyAndSell'>Contact</Link>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'>hello@tradExpress.com</Link>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'>Support@tradExpress.com</Link>
        <div className=' d-flex justify-content-center gap-3 py-2 justify-content-lg-start'>
         <span><img src={twitter} alt=""  /></span> 
          <span><img src={telegram} alt="" /></span>
          <span><img src={whatsapp} alt="" /></span>
         <span> <img src={facebook} alt="" /></span>
        </div>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'></Link>
  
      </div>

      <div className="column d-flex flex-column py-3">
        <Link className='w-100 text-black f-links  fw-bold text-decoration-none' to='/BuyAndSell'>Company</Link>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'>About Us</Link>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'>Careers</Link>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'>Rates</Link>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'>Mobile</Link>
      </div>

      <div className="column d-flex flex-column py-3">
        <Link className='w-100 text-black f-links  fw-bold text-decoration-none' to='/BuyAndSell'>Legal</Link>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'>Privacy Policy</Link>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'>Anti-Money Laundering</Link>
        <Link className='w-100 text-black f-links text-decoration-none' to='/BuyAndSell'>Terms and Conditions</Link>
      </div>


    </div>
  )
}

export default Footer