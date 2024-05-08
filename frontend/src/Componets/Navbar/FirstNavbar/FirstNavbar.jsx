import React from 'react'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import "./FirstNavbar.css"

export const FirstNavbar = () => {
  return (
    <div className='f-nav'>
      <div className='f-nav-left'>
        <div><Link to={"/"} className="logo">EverLook</Link></div>
      </div>
      <div className='f-nav-center'>
        <div className='f-nav-search'>
          <input type='text' placeholder="Click for search"/>
          <Link to={"/Search"}><button type="submit"><i className="bi bi-search "></i></button></Link>
        </div>
      </div>
      <div className='f-nav-right'>
        <div><Link to={"/Login"}><i className="bi bi-person-circle "></i></Link></div>
        <div><Link to={"/Basket"}><i className="bi bi-cart "></i></Link></div>
      </div>
    </div>
  )
}
