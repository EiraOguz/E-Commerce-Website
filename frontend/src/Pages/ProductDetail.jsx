import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Nike_1 from "../Componets/Assets/Product-Pictures/Nike-1.jpg";
import './ProductDetail.css';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userID, setUserID] = useState();
  const [products, setProducts] = useState([]);
  const [features, setFeatures] = useState([]);
  const [featuredetails, setFeatureDetails] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Buy Now');
  const [selectedFeatureDetailID, setSelectedFeatureDetailID] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [maxQuantity, setMaxQuantity] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    sendToken(storedToken);
  }, []);

  const sendToken = (token) => {
    axios.post('http://localhost:4000/routes/tokenmiddleware', { token: token })
      .then(res => {
        setUserID(res.data.userData.ID);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    axios.get('http://localhost:4000/routes/searchfilter')
      .then(res => setProducts(res.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:4000/routes/features')
      .then(res => setFeatures(res.data))
      .catch(err => console.error('Error fetching features:', err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:4000/routes/featuredetails')
      .then(res => setFeatureDetails(res.data))
      .catch(err => console.error('Error fetching feature details:', err));
  }, []);

  useEffect(() => {
    if (userID) {
      axios.get(`http://localhost:4000/routes/basket?userID=${userID}`)
        .then(res => {
          const isProductInBasket = res.data.some(item => item.ProductID === parseInt(id));
          if (isProductInBasket) {
            setIsButtonDisabled(true);
            setButtonText('In Cart');
          }
        })
        .catch(err => console.error('Error fetching basket:', err));
    }
  }, [userID, id]);
  
  useEffect(() => {
    if (selectedFeatureDetailID) {
      axios.post('http://localhost:4000/routes/stock', { FeatureDetailID: selectedFeatureDetailID, ProductID : id })
      .then(res => {
        if (res.data.StockNumber < 1 || res.data.StockNumber === undefined) {
          setButtonText('Out of Stock');
        } else {
          setMaxQuantity(res.data.StockNumber);
          if (buttonText !== 'In Cart') {
            setButtonText('Buy Now');
          }
        }
      })
        .catch(error => {
          console.error('Error fetching stock data:', error);
        });
    }
  }, [selectedFeatureDetailID, buttonText, id]);

  const product = products.find(product => product.ProductID === parseInt(id));

  if (!product) return <div>Product not found</div>;

  const feature = features.find(feature => feature.FeatureID === product.FeatureID);

  if (!feature) return <div>Feature not found</div>;

  const relevantFeatureDetails = featuredetails.filter(detail => detail.FeatureID === product.FeatureID);

  if (!relevantFeatureDetails.length) return <div>Feature Details not found</div>;

  const handleAddToBasket = () => {
    if (!userID) {
      navigate('/Login');
      return;
    }

    if (!selectedFeatureDetailID) {
      setError('Please select a feature detail');
      return;
    }

    const basketItem = {
      UserID: userID,
      ProductID: product.ProductID,
      NumberOfProduct: quantity,
      FeatureDetail: selectedFeatureDetailID
    };

    axios.post('http://localhost:4000/routes/addtobasket', basketItem)
      .then(response => {
        if (response.data.success) {
          navigate('/Basket');
        } else {
          setIsButtonDisabled(true);
          setButtonText('In Cart');
          console.error('Error adding product to basket:', response.data.message);
        }
      })
      .catch(error => {
        setIsButtonDisabled(true);
        setButtonText('In Cart');
        console.error('Error adding product to basket:', error);
      });
  };

  const handleFeatureDetailClick = (featureDetailID) => {
    setSelectedFeatureDetailID(featureDetailID);
    setError('');
    setQuantity(1);
  };

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
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
                  <button 
                    key={detail.FeatureDetailID} 
                    className={`color-button ${detail.FeatureDetailID === selectedFeatureDetailID ? 'selected' : ''}`} 
                    onClick={() => handleFeatureDetailClick(detail.FeatureDetailID)}
                  >
                    {detail.Name}
                  </button>
                  
                ))}
              </div>
              {error && <div className='error-message'>{error}</div>}
            </div>
            <div className='basket-quantity-items'>
              <i className="bi bi-dash" onClick={handleDecrement}></i>
              <div>{quantity}</div>
              <i className="bi bi-plus" onClick={handleIncrement}></i>
            </div>
          </div>
          <button 
            className={`add-to-cart-button ${buttonText === 'Out of Stock' ? 'disabled' : ''}`} 
            onClick={handleAddToBasket} 
            disabled={buttonText === 'Out of Stock' || isButtonDisabled}
          >
            {userID ? buttonText : 'Login to buy'}
          </button>
        </div>
      </div>
    </div>
  );
};
