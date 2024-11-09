import React, { useState, useEffect, useRef } from "react";
import "./Styles/ProductDetails.css";
import { useParams, useNavigate } from "react-router-dom"; 
import ButtonArrow from "../Assets/images/arrow-button.png";
import FullStar from "../Assets/images/fill-star.png";
import HalfStar from "../Assets/images/half-star.png";
import EmptyStar from "../Assets/images/empty-star.png";
import InStock from "../Assets/images/in-stock.png";
import OutOfStock from "../Assets/images/out-of-stock.png";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [product, setProduct] = useState(null);
  const [isSingleImage, setIsSingleImage] = useState(false);
  
  useEffect(() => {
    const producturl = `https://dummyjson.com/products/${id}`;

    fetch(producturl)
      .then((response) => response.json())
      .then((jsonData) => {
        setProduct(jsonData);
        if (jsonData.images.length <= 1) {
          setIsSingleImage(true);
        }
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, [id]);
  
  const [scrollLeft, setScrollLeft] = useState(0);
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollLeft = scrollLeft;
    }
  }, [scrollLeft]);

  function prebtnproduct() {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      setScrollLeft(scrollLeft - width);
    }
  }

  function nextbtnproduct() {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      setScrollLeft(scrollLeft + width);
    }
  }

  if (!product) {
    return (
      <div className="Loading-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="product-content">
        {!isSingleImage && (
          <button className="product-btn-prev" onClick={prebtnproduct}>
            <img src={ButtonArrow} alt="" />
          </button>
        )}
        {!isSingleImage && (
          <button className="product-btn-next" onClick={nextbtnproduct}>
            <img src={ButtonArrow} alt="" />
          </button>
        )}
        <div className="product-images" ref={boxRef}>
          {product.images.map((item, id) => (
            <img key={id} src={item} alt="" />
          ))}
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <h3>{product.description}</h3>
          {product.stock ? (
            <div className="stock-info-container">
              <img className="Stock-icon" src={InStock} alt="in-stock" /> <p>In stock</p>
            </div>
          ) : (
            <div className="stock-info-container">
              <img className="Stock-icon" src={OutOfStock} alt="out-of-stock" />
              <p>Out of Stock</p>
            </div>
          )}
          <h2>{product.rating} &#9733;</h2>
          <div className="price-and-buttons">
            <h2 className="product-price">{`$${product.price}`}</h2>
            <button>Add to Cart</button>
            <button>Buy now</button>
          </div>
          <button className="back-button" onClick={() => navigate(-1)}>
          &lt;
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
