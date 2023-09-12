import React from 'react'
import './Styles/CarouselCardNew.css'


function CarouselCardNew({img}) {
  return (
    <div className='CarouselSlide'>
    <img className = 'CarouselBg'src={img} alt="" />
    <img className = 'CarouselImg' src={img} alt="" />
    <div  className='HeroProductCaption'>
    <h2>Hero Product Description</h2>
    </div>
    </div>
  )
}

export default CarouselCardNew
