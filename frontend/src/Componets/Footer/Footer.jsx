import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>EverLook</div>
      <div className='footer-links'>
        <Link to="/Company" className='footer-link'>Company</Link>
        <Link to="/Products" className='footer-link'>Products</Link>
        <Link to="/Offices" className='footer-link'>Offices</Link>
        <Link to="/About" className='footer-link'>About</Link>
        <Link to="/Contact" className='footer-link'>Contact</Link>
      </div>
      <div className='footer-social-icons'>
        <a href="https://www.instagram.com/eiraoguz/" className='footer-social-icon-container'><i className="bi bi-instagram h4"></i></a>
        <a href="https://twitter.com/eiraoguz" className='footer-social-icon-container'><i className="bi bi-twitter-x h4"></i></a>
        <a href="https://www.linkedin.com/in/o%C4%9Fuzcan-h%C4%B1zl%C4%B1-4bb045302/" className='footer-social-icon-container'><i className="bi bi-linkedin h4"></i></a>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright © 2024 EverLook. All Rights Reserved.</p>
      </div>
    </div>
  );
};
