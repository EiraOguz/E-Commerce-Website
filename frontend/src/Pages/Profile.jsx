import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { logout } from '../Context/UserAuth.js';

import './Profile.css';

import Profile_Logo from "../Componets/Assets/Profile-Logo/Profile-Logo.webp";

const Profile = () => {
  const [token, setToken] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
      sendToken(storedToken);
  }, []);

  const sendToken = (token) => {
    axios.post('http://localhost:4000/routes/profile', { token: token })
      .then(res => {
        setToken(res.data.userData);
      })
      .catch(err => console.error(err));
  };

  const handleLogout = () => {
    logout();
    window.location.reload(navigate('/'));
  };

  return (
    <div className='profile-container'>
      <div className='profile-info'>
        <img src={Profile_Logo} alt="Profile" className="profile-image" />
        <div className="profile-user-details">
          {token && (
            <>
              <h2>{token.Name}</h2>
              <p>{token.Email}</p>
            </>
          )}
          <button onClick={handleLogout} className='profilelogoutbutton'>Çıkış Yap</button>
        </div>
      </div>
      <div className='profile-ordered-items'>
        <h2>Ordered Items</h2>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile;
