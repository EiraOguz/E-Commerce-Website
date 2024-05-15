import React, { useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

import "./Login.css";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/login', formData)
      .then(res => {
        if (res.data.success) {
          navigate('/');
        } else {
          setError(res.data.message);
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className='login'>
      <div className='login-options'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <p className="error-message">{error}</p>
          <div className='login-input-box'>
            <input type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange} required />
          </div>
          <div className='login-input-box'>
            <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleChange} required />
          </div>
          <div className='login-remember-forgot'>
            <label><input type='checkbox' />Remember me</label>
          </div>
          <button type='submit' className='login-button'>Login</button>
          <div className='login-register-link'>
            <p>Don't have an account?</p>
            <Link to="/Signup"><button type='button' className='login-register-button'>Register</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};
