import React from 'react'
import './Styles/ChangePassword.css'
import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <div className='Change-password-container'>
    <div className="change-password-card">
        <form action="">
          <h3>Change Password</h3>
          <p>Current Password</p>
          <input type="password" placeholder='Enter current password here'/>
          <p>New password</p>
          <input type="password" placeholder='Enter new password'/>
          <p>Confirm new passwords</p>
          <input type="password" placeholder='Confirm new password' />
          <Link to={'/UserDashboard'}><button className='Change-password-button'>Change Password</button></Link>
        </form>
    </div>
    </div>
  )
}

export default ChangePassword
