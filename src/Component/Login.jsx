import React from "react";
import "./login.css";

export const Login = () => {
  return (
    <div className="main_container">
      <div className="login_container" id="container">
        <div className="form-container sign-up-container">
          <form className="form" action="#">
            <h1 className="heading1">Create Account</h1>
            <span className="span">or use your email for registration</span>
            <input className="input" type="text" placeholder="Name" />
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            <button className="button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form" action="#">
            <h1 className="heading1">Sign in</h1>
            <span className="span">or use your account</span>
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            {/* <a href="#">Forgot your password?</a> */}
            <button className="button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="heading1" style={{ color: "#fff" }}>
                Welcome Back!
              </h1>
              <p className="paragraph">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost button"
                id="signIn"
                onClick={() => {
                  document
                    .getElementById("container")
                    .classList.remove("right-panel-active");
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="heading1" style={{ color: "#fff" }}>
                Hello, Friend!
              </h1>
              <p className="paragraph">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost button"
                id="signUp"
                onClick={() => {
                  document
                    .getElementById("container")
                    .classList.add("right-panel-active");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
