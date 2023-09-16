import React from "react";
import "./Styles/ProductDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ButtonArrow from "../Assets/images/arrow-button.png";
import FullStar from "../Assets/images/fill-star.png";
import HalfStar from "../Assets/images/half-star.png";
import EmptyStar from "../Assets/images/empty-star.png";
import InStock from "../Assets/images/in-stock.png";
import OutOfStock from "../Assets/images/out-of-stock.png";

function ProductDetails() {
  const { id } = useParams();
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
            <>
              <img src={item} alt="" />
            </>
          ))}
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <h3>{product.description}</h3>
          {product.stock && (
            <div className="stock-info-container">
              <img className="Stock-icon" src={InStock} alt="in-stock" /> <p>In stock</p>
            </div>
          )}
          {!product.stock && (
            <div className="stock-info-container">
              <img className="Stock-icon"src={OutOfStock} alt="out-of-stock" />
              <p>Out of Stock</p>
            </div>
          )}
          <h2>{product.rating} &#9733;</h2>
          <div className="price-and-buttons">
          <h2 className="product-price">{"\u20A8 " + product.price}</h2>
          <button>Add to Cart</button>
          <button>Buy now</button>
          </div>
          <p>
            About this item Snapdragon 4 Gen 2 Mobile Platform : Power efficient
            4nm architecture Display: Large 6.79" FHD+ 90Hz AdaptiveSync display
            with Corning Gorilla Glass Protection Camera: 50MP f/1.8 AI Dual
            camera with classic film filters, Film Frame, Portrait, Night Mode,
            50MP mode, Time-lapse, Google lens | 8MP Selfie camera 5000mAh(typ)
            battery with 22.5W charger in-box MIUI Dialer | MIUI 14 with Android
            13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating
            Extended RAM: Settings Additional Settings Memory Extension Select
            preferred RAM option
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
