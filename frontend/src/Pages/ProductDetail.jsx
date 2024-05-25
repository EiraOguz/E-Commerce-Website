import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import "./ProductDetail.css";

import Nike_1 from "../Componets/Assets/Product-Pictures/Nike-1.jpg";

export const ProductDetail = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get('http://localhost:4000/routes/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  
  const product = products.find(p => p.ProductID === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className='product-page'>
      <div className='product-details'>
        <div className='image-section'>
          <img src={Nike_1} alt={product.Name} className='product-image' />
        </div>
        <div className='info-section'>
          <h1 className='product-title'>{product.Name}</h1>
          <p className='product-price'>{product.Price} TL</p>
          <p className='product-description'>{product.Description}</p>
          <div className='product-options'>
            <div className='color-options'>
              <h3>Renk:</h3>
              <div className='colors'>
                {product.Colors && product.Colors.map(color => (
                  <button key={color} className='color-button'>{color}</button>
                ))}
              </div>
            </div>
            <div className='quantity-options'>
              <h3>Adet:</h3>
              <input
                type='number' 
                min='1' 
                value={quantity} 
                onChange={handleQuantityChange} 
                className='quantity-input' 
              />
            </div>
          </div>
          <Link to={'/Basket'}><button className='add-to-cart-button'>Sepete Ekle</button></Link>
        </div>
      </div>
    </div>
  );
}