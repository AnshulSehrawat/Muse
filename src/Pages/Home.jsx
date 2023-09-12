import React from 'react'
import '../components/Styles/Home.css'
import MainBanner from '../components/MainBanner'
import ProductCatalog from '../components/ProductCatalog'
import Carousel from '../components/CarouselNew.jsx'

function Home() {
  return (
    <div>
    <MainBanner/>
    <ProductCatalog/>
    <div className="HomeCarousel">
    <Carousel/>
    </div>
    </div>
  )
}

export default Home
