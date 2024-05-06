import React from 'react'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import "./FirstNavbar.css"

export const FirstNavbar = () => {
  return (
    <div className='firstpage-navbar'>
      <div className='nav-left'>
        <div><Link to={"/"} className="logo">EverLook</Link></div>
      </div>
      <div className='nav-middle'>
        <div className='nav-left'><input type='search' class="form-control" placeholder="Click for search"/></div>
        <div className='nav-right'><Link to={"/Search"} className='firstpage-link'><i class="bi bi-search h5"></i></Link></div>
      </div>
      <div className='nav-right'>
        <div className='nav-left'><Link to={"/Profile"} className='firstpage-link'><i class="bi bi-person-circle h5"></i></Link></div>
        <div className='nav-right'><Link to={"/Basket"} className='firstpage-link'><i class="bi bi-cart h5"></i></Link></div>
      </div>
    </div>
  )
}
