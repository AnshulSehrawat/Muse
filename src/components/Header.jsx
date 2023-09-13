import React,{useState} from 'react'
import './Styles/Header.css';
import { Link } from "react-router-dom";
import search from '../Assets/images/search.svg';
import myProfile from '../Assets/images/my-profile.svg'
import logo from '../Assets/images/main-logo.png'
import UserDropDown from './UserDropDown.jsx'

function Header() {
  const[usrBtnClicked, setUsrBtnClicked] = useState(false);
  function Userbtnclick()
  {
    setUsrBtnClicked(!usrBtnClicked);
  }
  return (
    <>
      <div className='Header-outer-container'>
        <div className="Header-container">
          <div className="logo-container">
            <Link className="Logo-link" to="../"><img src={logo} alt="" /></Link>
          </div>
          <div className="links-container">
            <Link className="Link" to="../">Home</Link>
            <Link className="Link" to="../Products">Products</Link>
            <Link className="Link" to="../About">About</Link>
            <Link className="Link" to="../Contacts">Contacts</Link>
          </div>
          <div className="search-panel-container">
            <input type="text" placeholder='Search..' />
            <button className='search-button'><img className="search-icon" src={search} alt="" /></button>
            <button class = 'User-section-btn' onClick={Userbtnclick}><img className = 'myProfile' src={myProfile} alt="" /></button>
          </div>
        </div>
        <div className='animate'></div>
      </div>
      {usrBtnClicked && <UserDropDown setUsrBtnClicked = {setUsrBtnClicked}/>}
      <div className='blur-bg'></div>
    </>
  )
}

export default Header
