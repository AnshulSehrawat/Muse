import React from 'react'
import './Styles/Carousel.css'
import CarouselCard from './CarouselCard.jsx'
import { useState } from 'react'
import ButtonArrow from '../Assets/images/arrow-button.png'

function Carousel() {
    const [receivedData, setReceivedData] = useState(null);
    let box = document.querySelector('.Carousel');
    function prebtnCarouselclick()
    {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
    }
    function nextbtnCarouselclick()
    {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
    }
  // Define a function to receive data from the child
  const sendDataToParent = (data) => {
    setReceivedData(data);
  };
  const sendDataToParentx = (data) => {
  };
  return (
    <div className='Carousel-Container'>
        <div className="Carousel">
        <CarouselCard sendDataToParent={sendDataToParent}/>
        <CarouselCard sendDataToParent={sendDataToParentx}/>
        <CarouselCard sendDataToParent={sendDataToParentx}/>
        <CarouselCard sendDataToParent={sendDataToParentx}/>
        <CarouselCard sendDataToParent={sendDataToParentx}/>
        </div>
        <img src={receivedData} alt="" />
        <button className='prebtnCarousel' onClick={prebtnCarouselclick}><img src={ButtonArrow} alt="" /></button>
        <button className='nextbtnCarousel' onClick={nextbtnCarouselclick}><img src={ButtonArrow} alt="" /></button>
    </div>
  )
}

export default Carousel
