import React,{useState} from 'react'
import { json } from 'react-router-dom';
import './Styles/CarouselCardNew.css'

let unsplash = 'https://api.unsplash.com/photos/random/?client_id=pnxXOL5Fe_G3mwgJ6SArvUFS-GeTP9WPiIgczJ6sT8I';
function CarouselCardNew() {
  // const[image, setImage] = useState();
  let image;
  fetch(unsplash)
  .then(function(response)
  {
    return response.json();     
  })
  .then(function(jsonData)
  {
    // setImage(jsonData.urls.regular);
    image = jsonData.urls.regular;
  })
  .catch(function(error){
    console.log("error : " + error);
  });
  return (
    <div className='CarouselSlide'>
    <img className = 'CarouselBg'src={image} alt="" />
    <img className = 'CarouselImg' src={image} alt="" />
    <div  className='HeroProductCaption'>
    <h2>Hero Product Description</h2>
    </div>
    </div>
  )
}

export default CarouselCardNew
