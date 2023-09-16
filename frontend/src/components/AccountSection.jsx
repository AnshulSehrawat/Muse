import React from 'react'
import './Styles/AccountSection.css'
import UserImage from '../Assets/images/user-image.png'

function AccountSection() {
  return (
    <div className='Account-section-container'>
    <h1>My Account</h1>
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
            <button className='Password-button'>Change Password</button>
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
