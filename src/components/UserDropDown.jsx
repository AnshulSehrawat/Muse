import React from 'react'
import './Styles/UserDropDown.css'
import { Link } from 'react-router-dom'
import DashboardIcon from '../Assets/images/dashboard.png'
import LogInIcon from '../Assets/images/sign-in.png'
import RegisterIcon from '../Assets/images/sign-up.png'


function UserDropDown({setUsrBtnClicked}) {
  function dropbtnclick()
  {
    setUsrBtnClicked(false);
  }
  return (
    <>
    <div className='UserMenu'>
    <button onClick= {dropbtnclick}><Link className = "UserMenuLink" to = "../UserDashboard"><img src={DashboardIcon} alt="" />Dashboard</Link></button>
    <button onclick = {dropbtnclick}><Link className = "UserMenuLink" to = "../Login"><img src={LogInIcon} alt="" />Login</Link></button>
    <button onclick = {dropbtnclick}><Link className = "UserMenuLink" to = "../Register"><img src={RegisterIcon} alt="" />Register</Link></button>
    </div>
    <div className="bg-blur"></div>
    </>
  )
}

export default UserDropDown
