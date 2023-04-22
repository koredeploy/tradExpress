import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import check from '../images/Group 152 (2).png'

const Login = () => {

 const [username, setUsername ] = useState('')
 const [password, setPassword ] = useState('')
 const [showPasswordError, setShowPasswordError] = useState('false')
 const [errors, setErrors] = useState({
  uername: '',
  password: '    This field is required',
 })
 
  return (
    <div>
       <div className='form-bg p-5'>
      <h3 className='text-center pt-3'>Welcome Back</h3>
      <form onSubmit={(e)=>{
        e.preventDefault()
        let formData = {
          user: username,
          pass: password
        }
        console.log(formData);
        if (password === '') {
          setShowPasswordError(true)
        }
    
      }} className='w-100 mx-auto py-3'>
        <input onChange={(e)=>{
          setUsername(e.target.value)
          console.log(e.target.value);
        }} className='w-100 rounded-2 px-3 py-2 mt-4' type="text" placeholder='Username' />
        <input
        onChange={(e)=>{
          setPassword(e.target.value)
          setShowPasswordError(false)
          console.log(e.target.value);
        }}
        className='w-100 rounded-2 px-3 py-2 mt-4 mb-2' type="password" placeholder='Password' />
        { showPasswordError && (<span className='text-danger '>{errors.password}</span>)} 
        <div className='d-flex flex-column flex-md-row justify-content-between mt-4 '>
          <div className='d-flex mx-auto mx-md-0 gap-2  align-center '>
            <span><img src={check} alt="" /></span>
          <p className='fs-0.1rem py-0'>Remember password</p>
          </div>
         <Link className='text-decoration-none fs-0.1rem text-purple text-center'>Forgot Password</Link>
        </div>
      <button className='btn signup-btn text-white w-100 py-2 my-4' > Login </button>
      <p className='text-center fs-small '>New User? <Link className='text-decoration-none text-purple' >Click here</Link> </p>
      </form>
    </div>
    </div>
  )
}

export default Login