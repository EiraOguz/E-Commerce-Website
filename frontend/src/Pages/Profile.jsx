import React from 'react';
import "./Profile.css";
import Profile_Logo from "../Componets/Assets/Profile-Logo/Profile-Logo.webp";

export const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-info'>
        <img src={Profile_Logo} alt="Profile" className="profile-image" />
        <div className="user-details">
          <h2>Oğuzcan Hızlı</h2>
          <p>eiraoguz@gmail.com</p>
        </div>
      </div>
      <div className='ordered-items'>
        <h2>Ordered Items</h2>
        <ul>
          {/* Sipariş edilen ürünler burada listelenecek */}
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
          {/* Daha fazla ürün */}
        </ul>
      </div>
    </div>
  )
}
