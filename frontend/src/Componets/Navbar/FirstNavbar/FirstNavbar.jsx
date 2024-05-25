import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../../Context/UserAuth.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Profile_Logo from '../../Assets/Profile-Logo/Profile-Logo.webp';

import './FirstNavbar.css';

const FirstNavbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen); 
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        window.location.reload(navigate(`/ProductList?search=${searchTerm}`));
    };
    
    return (
        <div className='first-navbar'>
            <div className='first-navbar-main'>

                <div className='first-navbar-logo'>
                    <Link to={"/"}>EverLook</Link>
                </div>

                <form className='first-navbar-search' onSubmit={handleSearchSubmit}>
                    <input
                        type='text'
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                        <i className="bi bi-search"></i>
                    </button>
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
                <form className='first-navbar-search' onSubmit={handleSearchSubmit}>
                    <input
                        type='text'
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                        <i className="bi bi-search "></i>
                    </button>
                </form>
                <div onClick={toggleSearch}><i className='bi bi-x'></i></div>
            </div>
            
        </div>
    );
};

export default FirstNavbar;
