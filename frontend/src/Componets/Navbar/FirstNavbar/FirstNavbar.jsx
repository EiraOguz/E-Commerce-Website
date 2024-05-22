import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../../Context/UserAuth.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Profile_Logo from '../../Assets/Profile-Logo/Profile-Logo.webp';

import './FirstNavbar.css';

const FirstNavbar = () => {
    // Responsive search logo options :
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen); 
    };
    
    return (
        <div className='first-navbar'>
            <div className='first-navbar-main'>

                <div className='first-navbar-logo'>
                    <Link to={"/"}>EverLook</Link>
                </div>

                <form className='first-navbar-search'>
                    <input type='text' placeholder="Search..." />
                    <Link to={"/ProductList"}>
                        <button type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </Link>
                </form>

                <div className='first-navbar-menu'>
                    <div onClick={toggleSearch}><Link><i className="bi bi-search"></i></Link></div>
                    <div className={isLoggedIn() ? 'hide-login-icon' : ''}><Link to={"/Login"}><i className="bi bi-person-square"></i></Link></div>
                    <div className={isLoggedIn() ? '' : 'hide-profile-image'}><Link to={"/Profile"}><img src={Profile_Logo} alt='Profile İmage'/></Link></div>
                    <div><Link to={"/Basket"}><i className="bi bi-bag-fill"></i></Link></div>
                    <div><Link><i className="bi bi-three-dots-vertical"></i></Link></div> 
                </div>

            </div>
            
            <div className={`first-navbar-search-responsive ${isSearchOpen ? 'responsive-search' : ''}`}>
                <form className='first-navbar-search'>
                    <input type='text' placeholder="Search..." />
                    <Link to={"/ProductList"}>
                        <button type="submit">
                            <i className="bi bi-search "></i>
                        </button>
                    </Link>
                </form>
                <div onClick={toggleSearch}><i className='bi bi-x'></i></div>
            </div>
            
        </div>
    );
};

export default FirstNavbar;
