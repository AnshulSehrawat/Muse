import React, { useState, useEffect } from 'react';
import './Styles/ProductCatalog.css';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';

async function fetchProductData() {
  try {
    const response = await axios.get('https://dummyjson.com/products?skip=0&limit=50');
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
function ProductCatalog() {
  const [allProducts, setAllProducts] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [smartPhones, setSmartPhones] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ProductsData = await fetchProductData();
      const LaptopData = await fetchLaptopData();
      const smartphonesData = await fetchSmartPhonesData();

      setAllProducts(ProductsData);
      setLaptops(LaptopData);
      setSmartPhones(smartphonesData);
    }
    fetchData();
  }, []);
  return (
    <div className="Main-container">
      <div className="product-card-container">
        <ProductCard title={"Latest Products"} arr={allProducts} />
        <ProductCard title={"Audio Products"} arr = {allProducts}/>
        <ProductCard title={"Smartphones"} arr = {smartPhones}/>
        <ProductCard title={"Laptops"} arr = {laptops}/>
      </div>
    </div>
  );
}

export default ProductCatalog;
