import React from 'react'
import './Styles/FilterBar.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import UncheckedBox from '../Assets/images/unchecked-box.png'
import CheckedBox from '../Assets/images/checked-box.png'

function FilterBar(props) {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("none");

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  function clickhandle(category) {
    console.log("CurrentSelectedCategory " + selectedCategory);
    console.log("Current Category " + category);
    if(selectedCategory === category)
    {
      setSelectedCategory("none");  
    }
    else
    {
      setSelectedCategory(category);
    }
  }
  props.applycategory(selectedCategory);
  return (
    <div className='FilterBarMain'>
    <div className='Categoryheading'>Product Categories</div>
    <div className='FilterBar'>
        {data.map((category, index) => (
          <button onClick={() => clickhandle(category)} key = {index}>
          {selectedCategory === category ? (<img src={CheckedBox} alt="Checked" />) : (<img src={UncheckedBox} alt="Unchecked" />)}
          <h3>{category}</h3>
          </button>
        ))}
    </div>
    </div>
  )
}

export default FilterBar
