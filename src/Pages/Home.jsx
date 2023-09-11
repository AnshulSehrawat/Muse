import React from 'react'
import MainBanner from '../components/MainBanner'
import ProductCatalog from '../components/ProductCatalog'
import Carousel from '../components/Carousel.jsx'

function Home() {
  return (
    <div>
    <MainBanner/>
    <ProductCatalog/>
    <Carousel/>
    </div>
  )
}

export default Home
