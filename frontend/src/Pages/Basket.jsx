import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Basket.css";

import Nike_1 from "../Componets/Assets/Product-Pictures/Nike-1.jpg";

export const Basket = () => {

  const [basketItems, setBasketItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    // Axios kullanarak backend'den sepet verilerini çekme
    axios.get('http://localhost:4000/routes/basket')
      .then(res => {
        setBasketItems(res.data);
      })
      .catch(error => {
        console.error('Error fetching basket items:', error);
      });
  }, []);

  useEffect(() => {
    // Her sepet öğesi için ürün bilgilerini çekme
    const fetchProductDetails = async () => {
      const detailsPromises = basketItems.map(item => 
        axios.post('http://localhost:4000/routes/product', { productID: item.ProductID })
      );
      try {
        const detailsResponses = await Promise.all(detailsPromises);
        const details = detailsResponses.map(response => response.data);
        setProductDetails(details);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (basketItems.length > 0) {
      fetchProductDetails();
    }
  }, [basketItems]);

  // Sepet öğelerini ve ilgili ürün bilgilerini ekranda görüntüleme
  return (
    <div className='basket'>
      <div className='basket-items-container'>
        <h2>Ordered Items</h2>
        <ul>
          {/* Sepet öğeleri ve ürün bilgilerini map kullanarak ekrana yazdırma */}
          {basketItems.map((item, index) => {
            const productDetail = productDetails.find(detail => detail.ProductID === item.ProductID);
            return productDetail ? (
              <li key={item.BasketID} className="basket-product-item">
                <img src={Nike_1} alt="Product" className="basket-product-image" />
                <div className="basket-product-info">
                  <div className='basket-product-font'>{productDetail.Name}</div>
                  <div className='basket-quantity-items'>
                    <i className="bi bi-dash"></i>
                    <div>{item.NumberOfProduct}</div>
                    <i className="bi bi-plus"></i>
                  </div>
                  <div className='basket-product-font'>Price : ${productDetail.Price * item.NumberOfProduct}</div>
                  <i className="bi bi-trash3-fill"></i>
                </div>
              </li>
            ) : null;
          })}
        </ul>
      </div>
      <div className='basket-summary-container'>
        <div className="basket-summary">
          <h2>Summary</h2>
          <p className="basket-total-price">Total Price : ${calculateTotalPrice(basketItems, productDetails)}</p>
          <button className='basket-checkout-btn'>Checkout</button>
        </div>
      </div>
    </div>
  );
}

// Sepet öğelerinin toplam fiyatını hesaplayan fonksiyon
const calculateTotalPrice = (basketItems, productDetails) => {
  return basketItems.reduce((total, item) => {
    const productDetail = productDetails.find(detail => detail.ProductID === item.ProductID);
    return total + (item.NumberOfProduct * (productDetail ? productDetail.Price : 0));
  }, 0);
}