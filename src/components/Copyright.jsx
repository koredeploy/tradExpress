import React from 'react'
import '../styles/Copyright.css'
import copyright from '../images/Vector (5).png'

const Copyright = () => {
  return (
    <div className='bg-white py-3'>
        <div className='mx-auto copyright gap-2'>
        <img className='mx-auto' src={copyright} alt="" />
        <p className='text-center'>2021 Tradexpress Technologies. All Right Reserved</p>

        </div>

    </div>
  )
}

export default Copyright