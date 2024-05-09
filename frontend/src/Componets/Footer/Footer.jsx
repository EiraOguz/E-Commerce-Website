import React from 'react'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import "./Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div className='footer-logo'>EverLook</div>
      </div>
      <div className='footer-links'>
        <Link to="/">Company</Link>
        <Link to="/">Products</Link>
        <Link to="/">Offices</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className='footer-social-icons'>
      <Link to="https://www.instagram.com/eiraoguz/" className='footer-social-icon-container'><i className="bi bi-instagram h4"></i></Link>
      <Link to="https://twitter.com/eiraoguz" className='footer-social-icon-container'><i className="bi bi-twitter-x h4"></i></Link>
      <Link to="https://www.linkedin.com/in/o%C4%9Fuzcan-h%C4%B1zl%C4%B1-4bb045302/" className='footer-social-icon-container'><i className="bi bi-linkedin h4"></i></Link>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright © 2024 EverLook. All Rights Reserved.</p>
      </div>
    </div>
  )
}