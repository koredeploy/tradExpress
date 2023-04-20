import React from 'react'
import {useState} from 'react'
import Sell from '../components/Sell'
import '../styles/IndiBusiness.css'
import Buy from '../components/Buy'

const BuyAndSell = () => {
  const [active, setactive] = useState('buy')
  const [display, setDisplay] = useState('true')
   return (

    <div>
      <div className='form-bg '>
      <h3 className='text-center py-3'>Welcome</h3>
      <div className='switch w-75 mx-auto '>
      <button onClick={()=>{
        setactive('buy')
        setDisplay(true)
      }} className={active === 'buy' ?'active' : ''}>
        Buy
      </button>
      <button onClick={()=>{
        setactive('sell')
        setDisplay(false)
      }} className={active === 'sell' ?'active' : ''}>
        Sell
      </button>

      </div>
      {display === true ?    <Sell/> : <Buy/>}
    </div>
  
    </div>
  )
}

export default BuyAndSell