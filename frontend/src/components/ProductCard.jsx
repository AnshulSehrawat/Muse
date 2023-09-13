import './Styles/ProductCard.css'
import Card from './Card.jsx'
import ButtonArrow from '../Assets/images/arrow-button.png'


function ProductCard({title, arr =[]}) {
  let box = document.querySelector('.Product-card');
  function prebtnclick()
  {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  }
  function nextbtnclick()
  {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }
  return (
    <>
      <h2 className = "Product-card-title">{title}</h2>
        <div className="Product-card" >  
        <button className='prebtn' onClick={prebtnclick}><img src={ButtonArrow} alt="" /></button>
        <button className='nextbtn' onClick={nextbtnclick}><img src={ButtonArrow} alt="" /></button>
        {
          arr.map((item, id) => (
            <div >
                <Card key = {id} product = {item}/>
            </div>
          ))
        }
        </div>
    </>
  )
}

export default ProductCard
