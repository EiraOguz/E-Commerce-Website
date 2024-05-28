import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

import Profile_Logo from "../Assets/Profile-Logo/Profile-Logo.webp";

const AdminPanel = () => {
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
    <div className="admin-panel">
      <nav className="sidebar">
      <Link to={'/Admin'}><h2>Admin Panel</h2></Link>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Settings</li>
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
            <h3>Total Users</h3>
            <p>1234</p>
          </div>
          <div className="card">
            <h3>Total Orders</h3>
            <p>567</p>
          </div>
          <div className="card">
            <h3>Total Products</h3>
            <p>89</p>
          </div>
          <div className="card">
            <h3>Total Sales</h3>
            <p>$12345</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
