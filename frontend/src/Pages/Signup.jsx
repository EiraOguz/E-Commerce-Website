import React from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css"

export const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup-options'>
        <form>
          <h1>Sign Up</h1>
          <div className='signup-input-box'>
            <input type='text' placeholder='Name & Surname' required />
          </div>
          <div className='signup-input-box'>
            <input type='email' placeholder='Email' required />
          </div>
          <div className='signup-input-box'>
            <input type='password' placeholder='Password' required />
          </div>
          <div className='signup-accept-policy'>
            <label><input type='checkbox' />Accept policy</label>
          </div>
          <button type='submit' className='signup-button'>Sign Up</button>
          <div className='signup-login-link'>
            <p>Do you already have an account?</p>
            <Link to="/Login"><button type='submit' className='signup-login-button'>Login</button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}
