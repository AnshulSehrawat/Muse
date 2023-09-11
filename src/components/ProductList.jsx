import React from 'react'
import './Styles/ProductList.css'
import { useState, useEffect } from 'react'
import Card from './Card.jsx'
import axios from 'axios';

async function fetchProductData() {
  try {
    const response = await axios.get('https://dummyjson.com/products?skip=0&limit=100');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

function ProductList() {
    const [ProductsData, setProductsData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const Products = await fetchProductData();
          setProductsData(Products);
        }
        fetchData();
      }, []);
  return (
    <div className='ProductListMain'>
    {
        ProductsData.map((item, id) => (
            <div className='ProductCardContainer'>
            <Card key = {id} product = {item}/>
            </div>
          ))
    }
    </div>
  )
}

export default ProductList
