import React, { useState, useEffect } from 'react';
import './Styles/CartCard.css';

function CartCard({ product }) {
    const [productImage, setProductImage] = useState();
    const [quantity, setQuantity] = useState(product.quantity);
    const [total, setTotal] = useState(product.total);
    const [discountedTotal, setDiscountedTotal] = useState(product.discountedTotal);
    const maxQuantity = 5;

    useEffect(() => {
        const producturl = `https://dummyjson.com/products/${product.id}`;
        console.log(producturl);
        fetch(producturl)
            .then((response) => response.json())
            .then((jsonData) => {
                if (jsonData && jsonData.thumbnail) {
                    setProductImage(jsonData.thumbnail);
                } else {
                    console.error("No thumbnail found for product:", product.id);
                }
            })
            .catch((error) => {
                console.log("error: " + error);
            });
    }, [product.id]);

    function quantityAdd() {
        if (quantity < maxQuantity) {
            setQuantity(quantity + 1);
            setTotal(Math.round(total + product.price));
        }
    }

    function quantitySubtract() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setTotal(Math.round(total - product.price));
        }
    }

    useEffect(() => {
        const discount = total * (product.discountPercentage / 100);
        setDiscountedTotal(Math.round(total - discount));
    }, [total, product.discountPercentage]);

    return (
        <div className='Cart-Card'>
            {productImage ? (
                <img className='Cart-image' src={productImage} alt={product.title} />
            ) : (
                <img className='Cart-image' src="path/to/placeholder/image.jpg" alt="Loading..." />
            )}
            <h1 className='Item-name'>{product.title}</h1>
            <p>{`$${Math.round(product.price)}`}</p>
            <div className='Quantity-container'>
                {quantity > 0 && <button onClick={quantitySubtract}>-</button>}
                <p>{quantity}</p>
                {quantity < maxQuantity && <button onClick={quantityAdd}>+</button>}
            </div>
            <p>{`$${Math.round(total)}`}</p>
            <p>{`$${Math.round(discountedTotal)}`}</p>
        </div>
    );
}

export default CartCard;
