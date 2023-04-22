import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/IndiBusiness.css'

const Individual = () => {
  return (
    <div>
         <form action="#" className='w-75 mx-auto py-3'>
        <input className='w-100 rounded-2 px-3 py-2 mt-4' type="text" placeholder='Username' />
        <input className='w-100 rounded-2 px-3 py-2 mt-4' type="text" placeholder='Fullname' />
        <input className='w-100 rounded-2 px-3 py-2 mt-4' type="email" placeholder='Email' />
        <input className='w-100 rounded-2 px-3 py-2 mt-4' type="text" placeholder='Phone Number' />
        <input className='w-100 rounded-2 px-3 py-2 mt-4' type="password" placeholder='Referal code[optional]'/>

      <p className='text-center w-75 mx-auto pt-3 terms fw-semi-bold'>By clicking the Sign Up button below, you agree to TradExpress <span className='text-purple'>terms and service</span></p>
      <button className='btn signup-btn text-white w-100 py-2' > SignUP</button>
      <p className='pt-3 fs-small'>Already have an account ? <Link className=' text-purple text-decoration-none my-3 ' to='/Login' > click here</Link></p>

      </form>
    </div>
  )
}

export default Individual