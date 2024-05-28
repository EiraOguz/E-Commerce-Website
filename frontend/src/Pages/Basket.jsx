import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Basket.css";
import Nike_1 from "../Componets/Assets/Product-Pictures/Nike-1.jpg";


export const Basket = () => {
  const [userID, setUserID] = useState();
  const [basketItems, setBasketItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [maxStockLimit, setMaxStockLimit] = useState();
  const navigate = useNavigate();

  console.log(basketItems);

  console.log(maxStockLimit);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      sendToken(storedToken);
    }
  }, []);

  const sendToken = (token) => {
    axios.post('http://localhost:4000/routes/tokenmiddleware', { token })
      .then(res => {
        const userID = res.data.userData.ID;
        setUserID(userID);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    if (userID) {
      fetchBasketItems(userID);
    }
  }, [userID]);

  const fetchBasketItems = (userId) => {
    axios.get(`http://localhost:4000/routes/basket?userID=${userId}`)
      .then(res => setBasketItems(res.data))
      .catch(error => console.error('Error fetching basket items:', error));
  };

  useEffect(() => {
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

  useEffect(() => {
    const featureDetailIDs = basketItems.map(item => item.FeatureDetailID);
    const productIDs = basketItems.map(item => item.ProductID);
    Promise.all(
      featureDetailIDs.map((featureDetailID, index) =>
        axios.post('http://localhost:4000/routes/stock', { FeatureDetailID: featureDetailID, ProductID: productIDs[index] })
      )
    )
    .then(responses => {
      const stockLimits = responses.map(response => response.data.StockNumber);
      setMaxStockLimit(stockLimits);
    })
    .catch(error => console.error('Error fetching max stock limits:', error));
  }, [basketItems]);
  
  
  const handleCheckout = async () => {
    try {
      // Her ürün için Orders tablosuna ekleme işlemini gerçekleştir
      await Promise.all(basketItems.map(item => handleAddToOrders(item.ProductID, item.NumberOfProduct)));
      await Promise.all(basketItems.map(item => updateStock(item.ProductID, item.NumberOfProduct)));
      await clearBasket();
      navigate('/Profile');
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };
  

  const handleAddToOrders = async (ProductID, NumberOfProduct) => {
    try {
      const response = await axios.post('http://localhost:4000/routes/addtoorders', {
        UserID: userID,
        ProductID: ProductID,
        NumberOfProduct: NumberOfProduct
      });
      if (response.data.success) {
        await clearBasket();
        navigate('/Profile');
      }
    } catch (error) {
      console.error('Error adding to orders:', error);
    }
  };
  
  const clearBasket = async () => {
    try {
     await axios.get(`http://localhost:4000/routes/clearbasket?userID=${userID}`);
    } catch (error) {
      console.error('Error clearing basket:', error);
    }
  };

  const handleIncreaseQuantity = async (itemIndex) => {
    const updatedBasketItems = [...basketItems];
    const item = updatedBasketItems[itemIndex];
    const itemStockLimit = maxStockLimit[itemIndex];
    
    if (item.NumberOfProduct < itemStockLimit) {
      updatedBasketItems[itemIndex].NumberOfProduct += 1;
      setBasketItems(updatedBasketItems);
  
      const { ProductID, NumberOfProduct } = item;
      await updateBasketQuantity(userID, ProductID, NumberOfProduct);
    }
  };
  
  const handleDecreaseQuantity = async (itemIndex) => {
    const updatedBasketItems = [...basketItems];
    const item = updatedBasketItems[itemIndex];
  
    if (item.NumberOfProduct > 1) {
      updatedBasketItems[itemIndex].NumberOfProduct -= 1;
      setBasketItems(updatedBasketItems);
  
      const { ProductID, NumberOfProduct } = item;
      await updateBasketQuantity(userID, ProductID, NumberOfProduct);
    }
  };
  
  
  const updateBasketQuantity = async (userID, productID, quantity) => {
    try {
      await axios.post('http://localhost:4000/routes/updatebasket', {
        userID,
        productID,
        quantity
      });
    } catch (error) {
      console.error('Error updating basket quantity:', error);
    }
  };

  const handleRemoveFromBasket = async (userID, productID, quantity) => {
    try {
      const response = await axios.get(`http://localhost:4000/routes/removefrombasket?userID=${userID}&productID=${productID}`);
      if (response.data.success) {
        fetchBasketItems(userID);
      } else {
        console.error('Error removing item from basket:', response.data.message);
      }
    } catch (error) {
      console.error('Error removing item from basket:', error);
    }
  };
  const updateStock = async (ProductID, NumberOfProduct) => {
    try {
      const response = await axios.post('http://localhost:4000/routes/updatestock', {
        ProductID,
        NumberOfProduct
      });
      if (!response.data.success) {
        console.error('Error updating stock:', response.data.message);
      }
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };
  

  return (
    <div className='basket'>
      <div className='basket-items-container'>
        <h2>Ordered Items</h2>
        {basketItems.length > 0 ? (
          <ul>
            {basketItems.map((item, index) => {
              const productDetail = productDetails.find(detail => detail.ProductID === item.ProductID);
              return productDetail ? (
                <li key={item.BasketID} className="basket-product-item">
                  <img src={Nike_1} alt="Product" className="basket-product-image" />
                  <div className="basket-product-info">
                    <div className='basket-product-font'>{productDetail.Name}</div>
                    <div className='basket-quantity-items'>
                      <i className="bi bi-dash" onClick={() => handleDecreaseQuantity(index)}></i>
                      <div>{item.NumberOfProduct}</div>
                      <i className="bi bi-plus" onClick={() => handleIncreaseQuantity(index)}></i>
                    </div>
                    <div className='basket-product-font'>Price : ${productDetail.Price * item.NumberOfProduct}</div>
                    <i className="bi bi-trash3-fill" onClick={() => handleRemoveFromBasket(userID, item.ProductID)}></i>
                  </div>
                </li>
              ) : null;
            })}
          </ul>
        ) : (
          <p className='basket-empty'>Your cart is currently empty</p>
        )}
      </div>
      <div className='basket-summary-container'>
        <div className="basket-summary">
          <h2>Summary</h2>
          <p className="basket-total-price">Total Price : ${calculateTotalPrice(basketItems, productDetails)}</p>
          <button className='basket-checkout-btn' onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

const calculateTotalPrice = (basketItems, productDetails) => {
  return basketItems.reduce((total, item) => {
    const productDetail = productDetails.find(detail => detail.ProductID === item.ProductID);
    return total + (item.NumberOfProduct * (productDetail ? productDetail.Price : 0));
  }, 0);
}
