import React from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css"

export const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup-options'>
      <form>
        <h1>Sign Up</h1>
        <div className='s-input-box'>
          <input type='text' placeholder='Name & Surname'  required/>
        </div>
        <div className='s-input-box'>
          <input type='email' placeholder='Email'  required/>
        </div>
        <div className='s-input-box'>
          <input type='password' placeholder='Pasword' required/>
        </div>
        <div className='Accept-policy'>
          <label><input type='checkbox'/>Accept policy</label>
        </div>
        <button type='submit' className='btn'>Sign Up</button>
        <div className='login-link'>
          <p>Do you already have an account?</p>
          <Link to="/Login"><button type='submit' className='btn-login'>Login</button></Link>
        </div>
      </form>
      </div>
      </div>
  )
}
