import React from 'react'
import '../styles/IndiBusiness.css'
import { Link } from 'react-router-dom'
import Individual from '../components/Individual'
import {useState} from 'react'
import Business from './Business'


const IndividualBusiness = () => {
  const [active, setactive] = useState('indi')
  const [display, setDisplay] = useState(true)

  return (
    <div className='body bg-white text-center '>

    <div className='form-bg '>
      <h3 className='text-center py-3'>Welcome</h3>
      <div className='switch w-75 mx-auto '>
        <button onClick={()=>{
          setactive('indi')
          setDisplay(true)
        }} className={active === 'indi' ? 'active' : ''} >Individual</button>
        
        <button
        onClick={()=>{
          setactive('bus')
          setDisplay(false)
        }} className={active === 'bus' ? 'active' : ''}
        >Business</button>
      </div>

    {display === true ?    <Individual/> : <Business/>}

    </div>
    </div>
  )
}

export default IndividualBusiness