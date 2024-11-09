import React from "react";
import "./Styles/LoginRegisterCard.css";
import LockIcon from "../Assets/images/lock-icon.png";
import UserIcon from "../Assets/images/user-icon.png";

function LoginCard({ title }) {
  const isRegistering = title === "Register";
  const isLoggingIn = title === "Log In";
  return (
    <div>
      
      <div className="Login-container">
        <div className="login-bg-blur"></div>
        <div className="Login-card">
          <form className={isLoggingIn ? "Logging-in" : ""} action="">
            <h1>{title}</h1>
            <p>Your Email</p>
            <div className="Login-input">
              <img src={UserIcon} alt="" />
              <input type="text" placeholder="e.g. elon@tesla.com" />
            </div>
            <p>Your password</p>
            <div className="Login-input">
              <img src={LockIcon} alt="" />
              <input type="password" placeholder="e.g. aiXisthefuture" />
            </div>
            {isRegistering && <>
            <p>Confirm your password</p>
            <div className="Login-input">
              <img src={LockIcon} alt="" />
              <input type="text" placeholder="e.g. aiXisthefuture" />
            </div>
            </>}
            <button>{title}</button>
            <div className="Other-options">
              {!isRegistering && <a href="./Register">Dont't have a account?</a>}
              {isRegistering && <a href="./Login">Already have a account?</a>}
              {!isRegistering && <a href="/ChangePassword">Frogot password?</a>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
