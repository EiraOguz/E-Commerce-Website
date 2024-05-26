import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import "./ProductDetail.css";

import Nike_1 from "../Componets/Assets/Product-Pictures/Nike-1.jpg";

export const ProductDetail = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [features, setFeatures] = useState([]);
  const [featuredetails, setFeatureDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get('http://localhost:4000/routes/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:4000/routes/features')
      .then(res => {
        setFeatures(res.data);
      })
      .catch(err => {
        console.error('Error fetching features:', err);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:4000/routes/featuredetail')
      .then(res => {
        setFeatureDetail(res.data);
      })
      .catch(err => {
        console.error('Error fetching feature details:', err);
      });
  }, []);
  
  const product = products.find(product => product.ProductID === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const feature = features.find(feature => feature.FeatureID === product.FeatureID);

  if (!feature) {
    return <div>Feature not found</div>;
  }

  // Filter feature details to only include those relevant to the product's feature
  const relevantFeatureDetails = featuredetails.filter(detail => detail.FeatureID === product.FeatureID);

  if (!relevantFeatureDetails.length) {
    return <div>Feature Details not found</div>;
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
          <p className='product-price'>${product.Price}</p>
          <p className='product-description'>{product.Description}</p>
          <div className='product-options'>
            <div className='color-options'>
              <h3>{feature.Name}</h3>
              <div className='feature'>
                {relevantFeatureDetails.map(detail => (
                  <button key={detail.FeatureDetailID} className='color-button'>{detail.Name}</button>
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
