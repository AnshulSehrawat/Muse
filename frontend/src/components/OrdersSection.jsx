import React, { useState, useEffect } from 'react';
import './Styles/OrdersSection.css';
import OrderCard from './OrderCard';

function OrdersSection() {
  const [orders, setOrders] = useState(null);
  const [userOrders, setUserOrders] = useState(null);
  const UserId = 26;

  useEffect(() => {
    const carturl = `https://dummyjson.com/carts/1`;

    fetch(carturl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log('Fetched data:', jsonData); 

        if (jsonData.userId === UserId) {
          setUserOrders(jsonData); 
          setOrders(jsonData.products);
        } else {
          console.log(`No orders found for userId: ${UserId}`);
          setUserOrders(null);
        }
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
      });
  }, [UserId]);

  if (orders === null) {
    return (
      <div className="Loading-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!userOrders || !userOrders.products || userOrders.products.length === 0) {
    return (
      <div className="Empty-cart-container">
        <h1>No orders.</h1>
      </div>
    );
  }

  return (
    <div className="order-section">
      <h1>Your Orders ({userOrders.products.length} items)</h1>
      <div className="order-card-container">
        <div className='order-card-header'>
          <h3 className='order-Item'>Item</h3>
          <h3>Quantity</h3>
          <h3>Price</h3>
        </div>
        {userOrders.products.map((item, id) => (
          <div key={id}>
            <OrderCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersSection; 
