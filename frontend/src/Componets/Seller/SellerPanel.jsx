import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SellerPanel.css';

import Profile_Logo from "../Assets/Profile-Logo/Profile-Logo.webp";

const SellerPanel = () => {
  const [userData, setUserData] = useState(null);

  const sendToken = useCallback((token) => {
    if (token) {
      axios.post('http://localhost:4000/routes/tokenmiddleware', { token: token })
        .then(res => {
          setUserData(res.data.userData);
        })
        .catch(err => console.error(err));
    }
  }, []);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    sendToken(storedToken);
  }, [sendToken]);
  
  return (
    <div className="seller-panel">
      <nav className="sidebar">
        <Link to={'/Seller'}><h2>Seller Panel</h2></Link>
        <ul>
          <li>My Products</li>
          <li>Add Product</li>
          <li>Logout</li>
        </ul>
      </nav>
      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <div className="profile">
            <img src={Profile_Logo} alt="Profile" />
            {userData ? <span>{userData.Name}</span> : <span>Loading...</span>}
          </div>
        </header>
        <section className="content">
          <div className="card">
            <h3>Total Products</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Total Orders</h3>
            <p>50</p>
          </div>
          <div className="card">
            <h3>Pending Orders</h3>
            <p>10</p>
          </div>
          <div className="card">
            <h3>Messages</h3>
            <p>8</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SellerPanel;
