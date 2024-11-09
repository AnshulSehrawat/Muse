import React, { useState, useEffect } from 'react';
import './Styles/CartSection.css';
import CartCard from './CartCard.jsx';

function CartSection() {
  const [cart, setCart] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const cartUrl = `https://dummyjson.com/carts/2`;

    fetch(cartUrl)
      .then((response) => response.json())
      .then((cartData) => {
        console.log('API Response:', cartData);

        if (cartData && cartData.products) {
          setCart(cartData);
          if (cartData.products.length > 0) {
            setIsEmpty(false);
          }
        } else {
          console.error('API response does not contain products.');
        }
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, []);

  if (cart === null) {
    return (
      <div className="Loading-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="Empty-cart-container">
        <h1>Your cart is empty.</h1>
      </div>
    );
  }

  return (
    <>
      <div className="Cart-section">
        <h1>Your Cart ({cart.products.length} items)</h1>
        <div className="cart-card-container">
          <div className='Card-header'>
            <h3 className='Item'>Item</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
            <h3>Discounted Total</h3>
          </div>
          {cart.products.map((item, id) => (
            <div key={id}>
              <CartCard product={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="cart-final-info">
        <h2>Grand Total : {`$${cart.discountedTotal}`}</h2>
        <button>Checkout</button>
      </div>
    </>
  );
}

export default CartSection;
