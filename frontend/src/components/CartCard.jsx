import React, {useState, useEffect} from 'react'
import './Styles/CartCard.css'

function CartCard({product}) {
    const[productImage, setProductImage] = useState();
    const [quantity, setQuantity] = useState(product.quantity);
    const[total, setTotal] = useState(product.total);
    const[discountedTotal, setDiscountedTotal] = useState(product.discountedPrice);
    const maxQuantity = 5; //Limit on quantity hardcoded

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
      }, [product.id]);
      function quantityAdd() {
        if(quantity <= maxQuantity)
        {
          setQuantity(quantity + 1);
          setTotal(total + product.price);
        }
      }
      function quantitySubtract() {
        if (quantity > 0) {
          setQuantity(quantity - 1);
          setTotal(total - product.price);
        }
      }
      useEffect(() => {
        setDiscountedTotal(Math.round(total - (total * (product.discountPercentage / 100))));
      }, [total, product.discountPercentage]);
  return (
    <div className='Cart-Card'>
      <img className='Cart-image' src={productImage} alt="" />
      <h1 className='Item-name'>{product.title}</h1>
      <p>{"\u20A8 " + product.price}</p>
      <div>
      {quantity ? <button onClick={() => quantitySubtract()}>-</button> : null}
      <p>{quantity}</p>
      {(maxQuantity - quantity) ? <button onClick={() => quantityAdd()}>+</button> : null}  
      </div>
      <p>{"\u20A8 " + total}</p>
      <p>{"\u20A8 " + discountedTotal}</p>
    </div>
  )
}

export default CartCard
