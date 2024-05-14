import React from 'react';
import "./Basket.css";
import Nike_1 from "../Componets/Assets/Product-Pictures/Nike-1.jpg";

export const Basket = () => {
  return (
    <div className='basket'>
      <div className='basket-items-container'>
        <h2>Ordered Items</h2>
        <ul>
          
          <li className="basket-product-item">
            <img src={Nike_1} alt="Product" className="basket-product-image" />
            <div className="basket-product-info">
              <div className='basket-product-font'>Nike Air Force</div>
              <div className='basket-quantity-items'>
                <i className="bi bi-dash"></i>
                <div>1</div>
                <i className="bi bi-plus"></i>
              </div>
              <div className='basket-product-font'>Price : $100</div>
              <i className="bi bi-trash3-fill"></i>
            </div>
          </li>
          
          <li className="basket-product-item">
            <img src={Nike_1} alt="Product" className="basket-product-image" />
            <div className="basket-product-info">
              <div className='basket-product-font'>Nike Air Force</div>
              <div className='basket-quantity-items'>
                <i className="bi bi-dash"></i>
                <div>3</div>
                <i className="bi bi-plus"></i>
              </div>
              <div className='basket-product-font'>Price : $300</div>
              <i className="bi bi-trash3-fill"></i>
            </div>
          </li>

        </ul>
      </div>
      <div className='basket-summary-container'>
        <div className="basket-summary">
          <h2>Summary</h2>
          <p className="basket-total-price">Total Price : $400</p>
          <button className='basket-checkout-btn'>Checkout</button>
        </div>
      </div>
    </div>
  );
}
