import React, { useState } from 'react'
import "./singIn.css"
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { Link } from 'react-router-dom';

const initialState = {
  email: "",
  password: "",
  errors: {
    email: "",
    password: ""
  }
}

const SingIn = () => {
  const [userLogin, setUserLogin] = useState(initialState)

  const handelInputChange = (e) =>{
    const {name, value} = e.target
    setUserLogin({...userLogin, [name] : value})
  }

  const handelSubmit = (e) =>{
    e.preventDefault();
    let isValid = true;
    const errors = {};

    if(!userLogin.email){
      errors.email = "Please Enter Email Id"
      isValid = false
    }

    if(!userLogin.password){
      errors.password = "Please Enter Password"
      isValid = false
    }

    setUserLogin({...userLogin, errors})
    
  }
  return (
    <div className='SingIn'>
      <h1>Welcome!</h1>
      <p>Log in your account</p>

      <form onSubmit={handelSubmit}>
        <div>
          <label>Your Email</label>
          <input type="text" placeholder='Enter email...' name='email' value={userLogin.email} onChange= {handelInputChange}/>
          {userLogin.errors.email && <p className='pTag'>{userLogin.errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder='Enter password...' name='password' value={userLogin.password} onChange= {handelInputChange}/>
          {userLogin.errors.password && <p className='pTag'>{userLogin.errors.password}</p>}
        </div>
        <div className='forgotAndReminder'>
          <div className='chekBox'>
            <input type="checkbox" id='reminder' />
            <label htmlFor="reminder">Reminder</label>
          </div>
          <div>
            <p className='fg'>Forgot Password</p>
          </div>
        </div>
        <div className='singInBtn'>
          <input type="submit" value="Login" />
        </div>
      </form>
      <div className='line'>
        <hr className='sinIn me-3' />
        <p className='or'>or</p>
        <hr className='sinIn ms-3' />
      </div>

      <div className='socalmedia'>
        <div className='inside-social'>
          <FcGoogle />
          <p>Continue with Google</p>
        </div>
        <div className='inside-social'>
          <ImFacebook2 />
          <p>Continue with Facebook</p>
        </div>
      </div>

      <div className='dont-have'>
        <p>Don't have any account? <Link to="/">Sign Up</Link></p>
      </div>
    </div>
  )
}

export default SingIn