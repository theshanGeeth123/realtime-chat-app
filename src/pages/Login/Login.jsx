import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets.js'

const Login = () => {

  const [currenState,setCurrentState] = useState("Sign up");

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo' />
      <form className="login-form">
        <h2>{currenState}</h2>
        {currenState === "Sign up" && <input type="text" placeholder='username' required className="form-input" />}
        <input type="text" placeholder='Email address' className="form-input" required />
        <input type="text" placeholder='password' className="form-input" required />
        <button type='submit'>{currenState === "Sign up"?"Create account":"Login now"}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currenState ==="Sign up" ? <p className="loggin-toggle">Already have and account <span onClick={() => {
            setCurrentState("Login")
          }}>Login here</span> </p>:
          <p className="loggin-toggle">Create an account <span onClick={() => {
            setCurrentState("Sign up")
          }}>click here</span> </p>}
        </div>
      </form>
    </div>
  )
}

export default Login
