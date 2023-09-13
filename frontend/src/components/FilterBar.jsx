import React from 'react'
import './Styles/FilterBar.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import UncheckedBox from '../Assets/images/unchecked-box.png'
import CheckedBox from '../Assets/images/checked-box.png'

function FilterBar() {
  const [Selected, setSelected] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className='FilterBarMain'>
    <div className='Categoryheading'>Product Categories</div>
    <div className='FilterBar'>
        {data.map(item => (
          <button onClick={()=>{setSelected(!Selected)}} key = {item}>
          {!Selected && <img src={UncheckedBox} alt="" />}
          {Selected && <img src={CheckedBox} alt="" />}
          <h3>{item}</h3>
          </button>
        ))}
    </div>
    </div>
  )
}

export default FilterBar
