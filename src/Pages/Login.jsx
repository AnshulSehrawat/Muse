import React from 'react'
import './Styles/Login.css'
import LoginCard from '../components/LoginRegisterCard.jsx'

function Login() {
  return (
    <div className='Login-content'>
      <LoginCard title ={"Log In"}/>
      <div className="login-message">
        <h1>WELCOME BACK</h1>
        <p>It's nice to see you again!</p>
        <p>Log in to continue to your account</p>
      </div>
    </div>
  )
}

export default Login
