import React from 'react'
import './Styles/ProductsContent.css'
import FilterBar from './FilterBar.jsx'
import ProductList from './ProductList.jsx'
import Carousel from './Carousel.jsx'

function ProductsContent() {
  return (
    <>
    <div className="carousel-container">
    <Carousel/>
    </div>
    <div className = 'ProductsContentMain'>
      <FilterBar/>
      <ProductList/>
    </div>
    </>
  )
}

export default ProductsContent
