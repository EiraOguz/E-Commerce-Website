import React,{useState} from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom';

import "./Signup.css"

export const Signup = () => {

  const[formData,setValues] = useState({
    name:"",
    email:"",
    password:"",
    role:"User"
  })
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/Signup', formData)
    .then(res => {
      if (res.data.success) {
        navigate('/');
      } else {
        setError(res.data.message);
      }
    })
    .catch(err => console.error(err));
  }

  return (
    <div className='signup'>
      <div className='signup-options'>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <p className="signup-error-message">{error}</p>
          <div className='signup-input-box'>
            <input type='text' placeholder='Name & Surname' required 
            onChange={e => setValues({...formData,name: e.target.value})}/>
          </div>
          <div className='signup-input-box'>
            <input type='text' placeholder='Email' required 
            onChange={e => setValues({...formData,email: e.target.value})}/>
          </div>
          <div className='signup-input-box'>
            <input type='password' placeholder='Password' required 
            onChange={e => setValues({...formData,password: e.target.value})}/>
          </div>
          <div className='signup-accept-policy'>
            <input type='checkbox' required /><label>Accept policy</label>
          </div>
          <button type='submit' className='signup-button'>Sign Up</button>
          <div className='signup-login-link'>
            <label>Do you already have an account?</label>
            <Link to="/Login"><button type='submit' className='signup-login-button'>Login</button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}
