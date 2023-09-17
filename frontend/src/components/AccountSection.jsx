import React from 'react'
import './Styles/AccountSection.css'
import UserImage from '../Assets/images/user-image.png'
import { Link } from "react-router-dom";

function AccountSection() {
  return (
    <div className='Account-section-container'>
    <div className='Account-Header'>
    <h1>My Account</h1>
    <Link to={'/Home'}><button className='LogOutButton'>Log Out</button></Link>
    </div>
    <div className="account-options">
        <div>
            <h3>Avatar</h3>
            <img src={UserImage} alt="" />
            <button>Edit</button>
        </div>
        <div>
            <h3>Name</h3>
            <h2>DummyName</h2>
            <button>Edit</button>
        </div>
        <div>
            <h3>Password</h3>
            <Link to ={'/ChangePassword'}>
            <button className='Password-button'>Change Password</button>
            </Link>
        </div>
        <div>
            <h3>Email</h3>
            <h2>Dummy Email</h2>
            <button>Edit</button>
        </div>
    </div>
    </div>
  )
}

export default AccountSection
