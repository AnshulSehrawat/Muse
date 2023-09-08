import React from 'react'
import './Styles/Card.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ProductFullCard from './ProductFullcard.jsx'

function Card({product}) {
  const[cardFocused, setCardFocused] = useState(false);
  function CardClick()
  {
    setCardFocused(true);
  }
  return (
    <>
    <Link  to = {'/product/${product.id}'} className = "card-link">
   <div className='card'>
      <img className='Product-card-image' src={product.thumbnail} alt="" />
      <div className='card-info'>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h2>{"\u20A8 "+product.price}</h2>  
      </div>
   </div>
    </Link>
    {cardFocused && <ProductFullCard cardProduct = {product}/>}
    </>
  )
}

export default Card
