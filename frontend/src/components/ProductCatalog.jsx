import React, { useState, useEffect } from 'react';
import './Styles/ProductCatalog.css';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';

async function fetchProductData() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

async function fetchLaptopData() {
  try {
    const response = await axios.get('https://dummyjson.com/products/category/laptops');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
async function fetchSmartPhonesData() {
  try {
    const response = await axios.get('https://dummyjson.com/products/category/smartphones');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
async function fetchMobileAccData() {
  try {
    const response = await axios.get('https://dummyjson.com/products/category/mobile-accessories');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
function ProductCatalog() {
  const [allProducts, setAllProducts] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [smartPhones, setSmartPhones] = useState([]);
  const [mobileAcc, setMobileAcc] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ProductsData = await fetchProductData();
      const LaptopData = await fetchLaptopData();
      const smartphonesData = await fetchSmartPhonesData();
      const mobileAccData = await fetchMobileAccData();

      setAllProducts(ProductsData);
      setLaptops(LaptopData);
      setSmartPhones(smartphonesData);
      setMobileAcc(mobileAccData);
    }
    fetchData();
  }, []);
  return (
    <div className="Main-container">
      <div className="product-card-container">
        <ProductCard title={"Latest Products"} arr={allProducts} />
        <ProductCard title={"Mobile Accessories"} arr = {mobileAcc}/>
        <ProductCard title={"Smartphones"} arr = {smartPhones}/>
        <ProductCard title={"Laptops"} arr = {laptops}/>
      </div>
    </div>
  );
}

export default ProductCatalog;
