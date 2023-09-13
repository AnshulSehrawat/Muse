import React from 'react'
import './Styles/ProductFullCard.css'

function ProductFullcard({cardProduct}) {
    
  return (
    <>
     <div className="BigCard"><h1>{cardProduct.title}</h1></div>
    </>
  )
}

export default ProductFullcard
