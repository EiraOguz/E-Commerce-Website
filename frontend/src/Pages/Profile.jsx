import React from 'react';

import "./Profile.css";

import Profile_Logo from "../Componets/Assets/Profile-Logo/Profile-Logo.webp";

export const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-info'>
        <img src={Profile_Logo} alt="Profile" className="profile-image" />
        <div className="profile-user-details">
          <h2>Oğuzcan Hızlı</h2>
          <p>eiraoguz@gmail.com</p>
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
