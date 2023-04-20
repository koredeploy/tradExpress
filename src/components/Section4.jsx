import React from 'react'
import '../styles/section4.css'
import step1 from '../images/cuate.png'
import step2 from '../images/rafiki.png'
import step3 from '../images/btccuate.png'
import one from '../images/emojione-monotone_keycap-1.png'
import two from '../images/emojione-monotone_keycap-2.png'
import three from '../images/emojione-monotone_keycap-3.png'

const Section4 = () => {
  return (
    <div className='sec4 py-3 '>
      <div className="sec4-container mx-auto container py-3">
      <h2 className='text-center w-100 fs-1 fw-bold'>Buy and Sell your cryptocurrencies in 3 simple steps</h2>
      <p className='text-center w-100 py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur distinctio, expedita officiis quo amet aperiam, corrupti consequuntur dicta, sunt voluptatum. Quos obcaecati necessitatibus quae. Placeat esse commodi exercitationem repudiandae?</p>

      </div>
      
      <div className="step1 container py-4">
        <img className='w-50 mx-auto ' src={step1} alt=""/>
       
        <div className="step">
          <img src={one} alt="" />
          <div className="create">
          <h3>Create a free Account</h3>
          <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
          </div>
        </div>
      </div>'
      
      <div className="step2 container py-4">
        <img className='w-50 mx-auto ' src={step2} alt=""/>
       
        <div className="step">
          <img src={two} alt="" />
          <div className="create">
          <h3>Deposit</h3>
          <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
          </div>
        </div>
      </div>

      <div className="step3 container py-4">
        <img className='w-50 mx-auto ' src={step3} alt=""/>
       
        <div className="step">
          <img src={three} alt="" />
          <div className="create">
          <h3>Buy/Sell Crypto</h3>
          <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile..</p>
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Section4