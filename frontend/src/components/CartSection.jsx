import React, { useState, useEffect } from 'react';
import './Styles/CartSection.css';
import CartCard from './CartCard.jsx'

function CartSection() {
  const [cart, setCart] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [userCart, setUserCart] = useState(null);
  const UserId = 97; // Hardcoded userID to be received

  useEffect(() => {
    const carturl = `https://dummyjson.com/carts`;

    fetch(carturl)
      .then((response) => response.json())
      .then((jsonData) => {
        setCart(jsonData.carts);
        setUserCart(jsonData.carts.find((cart) => cart.userId === UserId));

        if (userCart && userCart.totalProducts.length > 0) {
          setIsEmpty(false);
        }
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, [UserId]);

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
  console.log(userCart);
  return (
    <>
    <div className="Cart-section">
      <h1>Your Cart ({userCart.products.length} items)</h1>
      <div className="cart-card-container">
      <div className='Card-header'>
        <h3 className='Item'>Item</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
        <h3>Discounted Total</h3>
      </div>
      {userCart.products.map((item, id) => (
          <div key={id}>
            <CartCard key={id} product = {item}/>
          </div>
        ))}
      </div>
    </div>
    <div className="cart-final-info">
      <h2>Grand Total : {"\u20A8 " + userCart.discountedTotal}</h2>
      <button>Checkout</button>
    </div>
    </>
  );
}

export default CartSection;
