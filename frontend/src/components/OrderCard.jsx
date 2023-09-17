import React, {useState, useEffect} from 'react'
import './Styles/OrderCard.css'

function OrderCard({product}) {
    const[productImage, setProductImage] = useState(null);
    useEffect(() => {
        const producturl = `https://dummyjson.com/products/${product.id}`;
    
        fetch(producturl)
          .then((response) => response.json())
          .then((jsonData) => {
            setProductImage(jsonData.thumbnail);
          })
          .catch((error) => {
            console.log("error: " + error);
          });
      }, []);
      console.log(productImage);
  return (
    <div className='order-Card'>
      <img className='order-image' src={productImage} alt="" />
      <h1 className='Item-name'>{product.title}</h1>
      <p>{product.quantity}</p>
      <p>{"\u20A8 " + product.discountedPrice}</p>
    </div>
  )
}

export default OrderCard
