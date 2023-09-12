import React from 'react';
import './Styles/CarouselNew.css'
import CarouselCardNew from './CarouselCardNew.jsx'
import Carousel1 from '../Assets/images/Carousel1.jpg'
import Carousel2 from '../Assets/images/Carousel2.avif'
import Carousel3 from '../Assets/images/Carousel3.webp'
import Carousel4 from '../Assets/images/Carosuel4.webp'
import Carousel5 from '../Assets/images/Carousel5.webp'
import Carousel6 from '../Assets/images/Carousel6.jpg'
import ButtonArrow from '../Assets/images/arrow-button.png'

function CarouselNew() {
  let box = document.querySelector('.CarouselContainer');
  function CarouselLeft()
  {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  }
  function CarouselRight()
  {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }
  return (
    <>
    <div className="CarouselContainer">
      <button className='prebtn carouselbtn' onClick={CarouselLeft}><img src={ButtonArrow} alt="" /></button>
      <button className='nextbtn carouselbtn' onClick={CarouselRight}><img src={ButtonArrow} alt="" /></button>
      <CarouselCardNew img = {Carousel1} />
      <CarouselCardNew img = {Carousel2}/>
      <CarouselCardNew img = {Carousel3}/>
      <CarouselCardNew img = {Carousel4}/>
      <CarouselCardNew img = {Carousel5}/>
      <CarouselCardNew img = {Carousel6}/>
    </div>
    </>
  )
}

export default CarouselNew
