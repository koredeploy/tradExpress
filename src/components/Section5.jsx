import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Section5.css'
import appstore from '../images/Group 119.png'
import playstore from '../images/Group 120.png'


const Section5 = () => {
  return (
    <div className='container py-5'>
      <p className='text-center w-75 mx-auto'>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
      <h2 className='text-center font-weight-bold py-3 w-75 mx-auto'>Create your account for free and start trading today!</h2>
      <Link className='sec5-btn btn text-center d-block mx-auto py-2' to='/IndividualBusiness py-2'>Get Started</Link>
     <div className="sec5-link downlaod-links w-75 d-flex flex-md-row  mx-auto flex-column gap-3 justify-content-center ">
     <img src={playstore} alt="" />
      <img src={appstore} alt="" />
  
     </div>
    </div>
  )
}

export default Section5