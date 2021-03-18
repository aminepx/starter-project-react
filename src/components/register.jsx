import React from 'react'
import {Link} from "react-router-dom"
import './../assets/main.css'
import bgImage from "./../assets/bg-01.jpg"


export default function Register() {
    return (
        <div>
             <div>
                <div className="limiter">
    <div className="container-login100" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="wrap-login100">
        <form className="login100-form validate-form">
          <span className="login100-form-logo">
            <i className="fas fa-sign-out-alt" />
          </span>
          <span className="login100-form-title p-b-34 p-t-27">
            Register
          </span>
          <div className="wrap-input100 validate-input" data-validate="Enter First Name">
            <input className="input100" type="text" name="username" placeholder="First Name" />
            <span className="focus-input100" data-placeholder="" />
          </div>
          <div className="wrap-input100 validate-input" data-validate="Enter Last Name">
            <input className="input100" type="text" name="lastname" placeholder="Last Name" />
            <span className="focus-input100" data-placeholder="" />
          </div>
          <div className="wrap-input100 validate-input" data-validate="Enter Email">
            <input className="input100" type="text" name="pass" placeholder="Email" />
            <span className="focus-input100" data-placeholder="" />
          </div>
          <div className="wrap-input100 validate-input" data-validate="Enter password">
            <input className="input100" type="password" name="pass" placeholder="Password" />
            <span className="focus-input100" data-placeholder="" />
          </div>
          <div className="wrap-input100 validate-input" data-validate="Enter password">
            <input className="input100" type="password" name="pass" placeholder="confirmed Password" />
            <span className="focus-input100" data-placeholder="" />
          </div>
          <div className="contact100-form-checkbox">
            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
            <label className="label-checkbox100" htmlFor="ckb1">
              Remember me
            </label>
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn">
              Login
            </button>
          </div>
          <div className="text-center p-t-90 mt-5">
            <a className="txt1" href="https://colorlib.com/etc/lf/Login_v3/index.html#">
              <Link to="/admin"> Log in to your account</Link>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div id="dropDownSelect1" />
            </div>
        </div>
    )
}

