import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css" 
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar' >
      <div className='nav-left'>
        <div><Link style={{textDecoration:"none"}} to={"/"} >EverLook</Link></div>
      </div>
      <div className='nav-middle' >
        <div className='nav-left'><input className='form-outline' name='' type='search' class="form-control" placeholder="Click for search"/></div>
        <div className='nav-right'><button type="button" class="btn btn-danger "><i class="bi bi-search"></i></button></div>
      </div>
      <div className='nav-right'>
        <div className='nav-left'><Link to={"/Profile"} ><i class="bi bi-person-circle"></i></Link></div>
        <div className='nav-right'><Link to={"/Basket"} ><i class="bi bi-cart"></i></Link></div>
      </div>
    </div>
  )
}
