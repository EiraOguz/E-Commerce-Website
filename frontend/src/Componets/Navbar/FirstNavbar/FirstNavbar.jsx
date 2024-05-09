import React from 'react'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import "./FirstNavbar.css"

export const FirstNavbar = () => {
  return (
    <div className='first-navbar'>

      <div className='first-navbar-main'>

        <div className="first-navbar-logo"><Link to={"/"}>EverLook</Link></div>

        <form className='first-navbar-search'>
          <input type='text' placeholder="Search..."/>
          <Link to={"/Search"}><button type="submit"><i className="bi bi-search "></i></button></Link>
        </form>

        <div className='first-navbar-menu'>
          <div><Link to={"/Login"}><i className="bi bi-person-square"></i></Link></div>
          <div><Link to={"/Basket"}><i className="bi bi-bag-fill"></i></Link></div>
        </div>

      </div>
    </div>
  )
}
