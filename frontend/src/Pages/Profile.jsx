import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout } from '../Context/UserAuth.js';

import Nike_1 from "../Componets/Assets/Product-Pictures/Nike-1.jpg";

import './Profile.css';

import Profile_Logo from "../Componets/Assets/Profile-Logo/Profile-Logo.webp";

const Profile = () => {
  const [token, setToken] = useState();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const sendToken = useCallback((token) => {
    axios.post('http://localhost:4000/routes/tokenmiddleware', { token: token })
      .then(res => {
        setToken(res.data.userData);
        fetchUserOrders(res.data.userData.ID);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    sendToken(storedToken);
  }, [sendToken]);

  const fetchUserOrders = (userID) => {
    axios.get(`http://localhost:4000/routes/orders?userID=${userID}`)
      .then(res => {
        setOrders(res.data);
      })
      .catch(error => {
        console.error('Error fetching user orders:', error);
      });
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productPromises = orders.map(order =>
        axios.post('http://localhost:4000/routes/product', { productID: order.ProductID })
      );
      try {
        const productResponses = await Promise.all(productPromises);
        const productDetails = productResponses.map(response => response.data);
        setProducts(productDetails);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (orders.length > 0) {
      fetchProductDetails();
    }
  }, [orders]);

  const handleLogout = () => {
    logout();
    window.location.reload(navigate('/'));
  };
  
  return (
    <div className='profile-container'>
      <div className='profile-info'>
        <img src={Profile_Logo} alt="Profile" className="profile-image" />
        <div className="profile-user-details">
          {token && (
            <>
              <h2>{token.Name}</h2>
              <p>{token.Email}</p>
            </>
          )}
          <button onClick={handleLogout} className='profilelogoutbutton'>Logout</button>
        </div>
      </div>
      <div className='profile-ordered-items'>
        <h2>Orders</h2>
        <ul>
          {orders.map((order, index) => {
            const product = products.find(p => p.ProductID === order.ProductID);
            return (
              <li key={order.OrderID} className='order-item'>
                <div className='order-details'>
                  {product ? (
                    <>
                <div>Product Name: {product.Name}</div>
                <div>Quantity: {order.NumberOfProduct}</div>
                <div>Price: {order.Price}</div>
                <div>Order Time: {new Date(order.CreatedAt).toLocaleString()}</div>
              </>
                  ) : (
                    <div>Loading product details...</div>
                  )}
                </div>
                <div className='order-image'>
                <img src={Nike_1} alt={order.ProductName} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Profile;