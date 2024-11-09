import React, { useState, useEffect } from "react";
import "./Styles/ProductList.css";
import Card from "./Card.jsx";
import axios from "axios";

async function fetchProductData() {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?skip=0&limit=0"
    );
    return response.data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function ProductList({ filterCategory }) {
  const [ProductsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const Products = await fetchProductData();
      setProductsData(Products);
      console.log("Fetched Products Data:", Products);
    }
    fetchData();
  }, []);

  const displayedProducts = filterCategory === "none"
    ? ProductsData
    : ProductsData.filter(item => item.category === filterCategory);

  return (
    <div className="ProductListMain">
      {displayedProducts.length === 0 ? (
        <p>Sorry No products found in this category.</p>
      ) : (
        displayedProducts.map((item) => (
          <div key={item.id} className="ProductCardContainer">
            <Card product={item} />
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
