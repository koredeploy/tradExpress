import React from 'react'
import '../styles/Section6.css'
import quote from '../images/Group 208.png'
import dp1 from '../images/Ellipse 3.png'
import dp2 from '../images/Ellipse 3 (1).png'
import dp3 from '../images/Ellipse 3 (2).png'

const Section6 = () => {
  return (
    <div className='sec6'>
      <h1 className='text-center py-3'>Customer's Review</h1>
      <div className="review container d-flex flex-column gap-5 mx-auto py-5">
        
        <div className="col">
        <div className="customer-review py-3 d-flex align-item-center">
          <img className='quote'  src={quote} alt="" />
          <p className='text-center w-75 mx-auto text-white py-3'>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
        </div>

        <div className="customer-detail">
        <img src={dp1} alt="" />
        <div className="detail">
            <h4>Ireti</h4>
            <p>Nigeria</p>
          </div>
        </div>

        </div>

       <div className="col">
       <div className="customer-review py-3">
        <img className='quote' src={quote} alt="" />
          <p className='text-center w-75 mx-auto text-white py-3'>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
          
        </div>
        <div className="customer-detail">
        <img src={dp2} alt="" />
        <div className="detail">
            <h4>Bayo</h4>
            <p>USA</p>
          </div>
        </div>
       </div>
       <div className="col">
       <div className="customer-review py-3">
        <img className='quote' src={quote} alt="" />
          <p className='text-center w-75 mx-auto text-white py-3'>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
        </div>    
      <div className="customer-detail">
        <img src={dp3} alt="" />
        <div className="detail">
            <h4>Olugoke</h4>
            <p>Nigeria</p>
          </div>
        </div>

       </div>
</div>
  

    </div>
  )
}

export default Section6