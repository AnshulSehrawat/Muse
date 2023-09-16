import React, { useState, useEffect } from 'react';
import './Styles/OrdersSection.css';
import CartCard from './CartCard.jsx'

function CartSection() {
  const [orders, setOrders] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [userOrders, setUserOrders] = useState(null);
  const UserId = 26; // Hardcoded userID to be received

  useEffect(() => {
    const carturl = `https://dummyjson.com/carts`;

    fetch(carturl)
      .then((response) => response.json())
      .then((jsonData) => {
        setOrders(jsonData.carts);
        setUserOrders(jsonData.carts.find((cart) => cart.userId === UserId));

        if (userOrders && userOrders.totalProducts.length > 0) {
          setIsEmpty(false);
        }
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, [UserId]);

  if (orders === null) {
    return (
      <div className="Loading-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="Empty-cart-container">
        <h1>No orders.</h1>
      </div>
    );
  }
  return (
    <>
    <div className="Cart-section">
      <h1>Your Orders ({userOrders.products.length} items)</h1>
      <div className="cart-card-container">
      <div className='Card-header'>
        <h3 className='Item'>Item</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
        <h3>Discounted Total</h3>
      </div>
      {userOrders.products.map((item, id) => (
          <div key={id}>
            <CartCard key={id} product = {item}/>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default CartSection;
