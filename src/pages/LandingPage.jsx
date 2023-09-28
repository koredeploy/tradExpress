import React from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Footer from '../components/Footer'
import '../App.css'
import Copyright from '../components/Copyright'

const LandingPage = ({cryptoDetails}) => {
    
  return (
    <div className='landingPage-body'>
      <Section1/>
      <Section2 data= {cryptoDetails}/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default LandingPage