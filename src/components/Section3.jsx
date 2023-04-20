
import React, {useState} from 'react'
import '../styles/Section3.css'
import { Link } from 'react-router-dom'
import easymode from '../images/mobile-payment.png'
import investment from '../images/investment.png'
import freelancer from '../images/freelancer.png'


const Section3 = () => {
  const [open, setOpen] = useState(true)
  const btnText = open ? 'see less': 'see more'
  const isactive = open ? 'd-flex' : 'd-none'

  return (
    <div className='container sec3 py-5'>
      <h1 className=' text-center py-4'> Why do people get involved in cryptocurrencies</h1>
      <Link onClick={()=>{
        setOpen(!open) 
      }} className='sec3-btn btn text-center text-purple d-block mx-auto py-2' to={`#`} >{btnText}</Link>

      <div className={`flex-container flex-column gap-5 py-4 ${isactive}`}>
        <div className="col1  p-3 text-center mx-auto lg-w-100 ">
          <img src={easymode} alt="" />
          <h2 className='text-center py-3 '>Easy Mode of Payment</h2>
          <p>People can now easily send and recieve money from anywhere in the world to purchase goods and pay for services.</p>
        </div>
        <div className="col2 background-white p-3 text-center mx-auto ">
          <img src={freelancer} alt="" />
          <h2 className='py-2'>Financial Freedom</h2>
          <p>Just like the internet no single entity controls the crypto network which provides users transparency and privacy, which puts you in absolute control of your money</p>
        </div>
        <div className="col3 background-white p-3 text-center mx-auto">
          <img src={investment} alt="" />
          <h2 className='py-2'>Investment</h2>
          <p>The constant demand as made cryptocurrencies a Digital Gold used for alternativev store of wealth on long term investments.</p>
        </div>
      </div>
    </div>
  )
}

export default Section3