import React from 'react'
import { Link } from 'react-router-dom';
import "./Login.css"

export const Login = () => {
  return (
    <div className='login'>
      <div className='login-options'>
      <form>
        <h1>Login</h1>
        <div className='login-input-box'>
          <input type='email' placeholder='Email'  required/>
        </div>
        <div className='login-input-box'>
          <input type='password' placeholder='Pasword' required/>
        </div>
        <div className='login-remember-forgot'>
          <label><input type='checkbox'/>Remember me</label>
        </div>
        <button type='submit' className='login-button'>Login</button>
        <div className='login-register-link'>
          <p>Don't have an account?</p>
          <Link to="/Signup"><button type='submit' className='login-register-button'>Register</button></Link>
        </div>
      </form>
      </div>
    </div>
  )
}
