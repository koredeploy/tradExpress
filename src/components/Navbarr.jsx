import React from 'react'
import { Navbar, Container, Nav,} from 'react-bootstrap'
import { Link } from  'react-router-dom'
import '../styles/Navbar.css'
import TradExpress from '../images/TradExpress.png'


const Navbarr = () => {
  return (
    <Navbar className='nav1' expand="lg" >
      <Container className='nav-container'>
        <Link to='/'>
            <img src={TradExpress} alt="" />
            </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-2 my-3 align-items-center w-100">
            <Link className='w-100 text-white text-decoration-none' to='/BuyAndSell'>Instant Buy/Sell</Link>
            <Link className='w-50 text-white text-decoration-none' to='#'>Learn </Link>
            <Link className='w-75 text-white text-decoration-none btn border-white w-50 mx-auto my-1' to='/Login'>Login</Link>
            <Link className='w-75 text-purple text-decoration-none btn border-white w-50 mx-auto my-1 bg-white' to='/IndividualBusiness'>Get Started</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr