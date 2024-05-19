import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import "./Signup.css";

export const Signup = () => {
    const [formData, setValues] = useState({
        name: "",
        email: "",
        password: "",
        role: "User"
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/auth/signup', formData)
            .then(res => {
                if (res.data.signupsuccess) {
                    navigate('/Login');
                } else {
                    setError(res.data.message);
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div className='signup'>
            <div className='signup-options'>
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <p className="signup-error-message">{error}</p>
                    <div className='signup-input-box'>
                        <input type='text' name='name' placeholder='Name & Surname' required onChange={handleChange} />
                    </div>
                    <div className='signup-input-box'>
                        <input type='text' name='email' placeholder='Email' required onChange={handleChange} />
                    </div>
                    <div className='signup-input-box'>
                        <input type='password' name='password' placeholder='Password' required onChange={handleChange} />
                    </div>
                    <div className='signup-accept-policy'>
                        <input type='checkbox' required /><label>Accept policy</label>
                    </div>
                    <button type='submit' className='signup-button'>Sign Up</button>
                    <div className='signup-login-link'>
                        <label>Do you already have an account?</label>
                        <Link to="/Login"><button type='button' className='signup-login-button'>Login</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
