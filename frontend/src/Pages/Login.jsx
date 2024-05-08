import React from 'react'
import { Link } from 'react-router-dom';
import "./Login.css"

export const Login = () => {
  return (
    <div className='login'>
      <div className='login-options'>
      <form>
        <h1>Login</h1>
        <div className='l-input-box'>
          <input type='email' placeholder='Email'  required/>
        </div>
        <div className='l-input-box'>
          <input type='password' placeholder='Pasword' required/>
        </div>
        <div className='Remember-forgot'>
          <label><input type='checkbox'/>Remember me</label>
        </div>
        <button type='submit' className='btn'>Login</button>
        <div className='register-link'>
          <p>Don't have an account?</p>
          <Link to="/Signup"><button type='submit' className='btn-register'>Register</button></Link>
        </div>
      </form>
      </div>
    </div>
  )
}
