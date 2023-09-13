// import React, { useState , useEffect} from 'react'
// import { json } from 'react-router-dom';
// import './Styles/CarouselCard.css'

// let unsplash = 'https://api.unsplash.com/photos/random/?client_id=pnxXOL5Fe_G3mwgJ6SArvUFS-GeTP9WPiIgczJ6sT8I';
// function CarouselCard({ sendDataToParent }) {
//   const [dataToSend, setDataToSend] = useState();
//   const[image, setImage] = useState();

//   fetch(unsplash)
//   .then(function(response)
//   {
//     return response.json();     
//   })
//   .then(function(jsonData)
//   {
//     setImage(jsonData.urls.regular);
//   })
//   .catch(function(error){
//     console.log("error : " + error);
//   });
  
//   useEffect(() => {
//     setDataToSend(image);
//     sendDataToParent(dataToSend);
//   }, [/*dataToSend, sendDataToParent*/]);
  
//   return (
//     <div className='CarouselCard'>
//       <img src={image} alt="" />
//     </div>
//   )
// }

// export default CarouselCard
