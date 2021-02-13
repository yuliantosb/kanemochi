import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../../components/Button/Button";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <img src={logo} className="img-logo" alt="Kanemochi Logo" />
      <h1 className="header-text">Hello! Welcome back</h1>
      <p>Please sign in to continue</p>
      <div>
        <div className="input-group">
          <label>Email Address</label>
          <div className="input">
            <i className="mdi mdi-account" />
            <input type="email" placeholder="example@mail.com" />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>
          <div className="input">
            <i className="mdi mdi-lock" />
            <input type="password" placeholder="*****" />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Link to="/" className="mr-20">
          <Button type="primary">Sign In</Button>
        </Link>
        <Link to="/">
          <Button type="secondary">Forgot Password</Button>
        </Link>
      </div>
    </div>
  );
}
