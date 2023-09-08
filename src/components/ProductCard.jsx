import './Styles/ProductCard.css'
import Card from './Card.jsx'


function ProductCard({title, arr =[]}) {
  return (
    <>
      <h2 className = "Product-card-title">{title}</h2>
      <div className="Product-card">
        <div className="Product-card" >  
        {
          arr.map((item, id) => (
            <div >
            <Card key = {id} product = {item}/>
            </div>
          ))
        }
        </div>
      </div>
    </>
  )
}

export default ProductCard
