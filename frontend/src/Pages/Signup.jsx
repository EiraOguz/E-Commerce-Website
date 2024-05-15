import React,{useState} from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';

import "./Signup.css"

export const Signup = () => {

  const[values,setValues] = useState({
    Name:"",
    Email:"",
    Password:"",
    Role:"None"
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/Signup', values)
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

  return (
    <div className='signup'>
      <div className='signup-options'>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className='signup-input-box'>
            <input type='text' placeholder='Name & Surname' required 
            onChange={e => setValues({...values,Name: e.target.value})}/>
          </div>
          <div className='signup-input-box'>
            <input type='email' placeholder='Email' required 
            onChange={e => setValues({...values,Email: e.target.value})}/>
          </div>
          <div className='signup-input-box'>
            <input type='password' placeholder='Password' required 
            onChange={e => setValues({...values,Password: e.target.value})}/>
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
