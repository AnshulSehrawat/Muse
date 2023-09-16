import React from "react";
import "./Styles/ProductList.css";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import axios from "axios";

async function fetchProductData() {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?skip=0&limit=100"
    );
    return response.data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function ProductList({ filterCategory }) {
  const [ProductsData, setProductsData] = useState([]);
  const noCategory = filterCategory === "none";
  useEffect(() => {
    async function fetchData() {
      const Products = await fetchProductData();
      setProductsData(Products);
    }
    fetchData();
  }, []);
  const filteredData = ProductsData.filter(item => item.category === filterCategory);
  return (
    <div className="ProductListMain">
       {ProductsData.map((item) => (
        noCategory && (
          <div key={item.id} className='ProductCardContainer'>
            <Card product={item} />
          </div>
        )
      ))}
      {filteredData.map((item) => (
      !noCategory && (<div key={item.id} className='ProductCardContainer'>
            <Card product={item} />
          </div>)
      ))}
    </div>
  );
}

export default ProductList;
