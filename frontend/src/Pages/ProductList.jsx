import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

import './ProductList.css';

import Nike_1 from "../Componets/Assets/Product-Pictures/Nike-1.jpg";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [features, setFeatures] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedFeature, setSelectedFeature] = useState('');

  const location = useLocation();
  
  const fetchProducts = useCallback(() => {
    let query = 'http://localhost:4000/routes/products';
    const params = [];

    if (selectedCategory) params.push(`category=${selectedCategory}`);
    if (selectedBrand) params.push(`brand=${selectedBrand}`);
    if (selectedFeature) params.push(`feature=${selectedFeature}`);
    
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search');
    if (searchTerm) params.push(`search=${searchTerm}`);

    if (params.length) query += '?' + params.join('&');

    axios.get(query)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, [selectedCategory, selectedBrand, selectedFeature, location.search]);

  useEffect(() => {
    axios.get('http://localhost:4000/routes/categories')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.error('Error fetching categories:', err);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:4000/routes/brands')
      .then(res => {
        setBrands(res.data);
      })
      .catch(err => {
        console.error('Error fetching brands:', err);
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
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className='product-list'>
      <div className='filter-section'>
        <div className='product-filter'>
          <h2>Filter Products</h2>
          <div className='filter-option'>
            <label>Category</label>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value=''>All Categories</option>
              {categories.map(category => (
                <option key={category.CategoryID} value={category.CategoryID}>{category.MainCategoryName+'-'+category.SubCategoryName}</option>
              ))}
            </select>
            <label>Brand</label>
            <select onChange={(e) => setSelectedBrand(e.target.value)}>
              <option value=''>All Brands</option>
              {brands.map(brand => (
                <option key={brand.BrandID} value={brand.BrandID}>{brand.Name}</option>
              ))}
            </select>
            <label>Feature</label>
            <select onChange={(e) => setSelectedFeature(e.target.value)}>
              <option value=''>All Features</option>
              {features.map(feature => (
                <option key={feature.FeatureID} value={feature.FeatureID}>{feature.Name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className='product-section'>
        <div className='product-grid'>
          {products.map(product => (
            <div className='product-card' key={product.ProductID}>
              <Link to={`/productDetail/${product.ProductID}`}>
                <img src={Nike_1} alt={product.Name} className='product-image' />
                <h2 className='product-name'>{product.Name}</h2>
                <p className='product-price'>${product.Price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
