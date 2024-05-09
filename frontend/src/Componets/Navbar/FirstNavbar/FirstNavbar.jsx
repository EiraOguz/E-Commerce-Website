import React from 'react'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import "./FirstNavbar.css"


  const FirstNavbar = () => {
    function SearchIconClick(){

      const SearchIcon = document.getElementById('first-navbar-search-responsive');
      SearchIcon.classList.add("responsive-search");

      return SearchIcon;
    }
    function CloseIconClick(){

      const CloseIcon = document.getElementById('first-navbar-search-responsive');
      CloseIcon.classList.remove("responsive-search");

      return CloseIcon;
    }
  return (
    <div className='first-navbar'>

      <div className='first-navbar-main'>

        <div className="first-navbar-logo"><Link to={"/"}>EverLook</Link></div>

        <form className='first-navbar-search'>
          <input type='text' placeholder="Search..."/>
          <Link to={"/Search"}><button type="submit"><i className="bi bi-search "></i></button></Link>
        </form>

        <div className='first-navbar-menu'>
          <div onClick={SearchIconClick}><Link><i className="bi bi-search"></i></Link></div>
          <div><Link to={"/Login"}><i className="bi bi-person-square"></i></Link></div>
          <div><Link to={"/Basket"}><i className="bi bi-bag-fill"></i></Link></div>
          <div><Link><i class="bi bi-three-dots-vertical"></i></Link></div>
        </div>
      </div>

      <div class='first-navbar-search-responsive' id='first-navbar-search-responsive'>

        <form className='first-navbar-search'>
          <input type='text' placeholder="Search..."/>
          <Link to={"/Search"}><button type="submit"><i className="bi bi-search "></i></button></Link>
        </form>

        <div onClick={CloseIconClick}><i className='bi bi-x'></i></div>
        
      </div>

    </div>
  )
}    

export default FirstNavbar;