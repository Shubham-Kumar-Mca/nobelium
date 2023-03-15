import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./singUp.css"

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
}
const SingUp = () => {
    const [userInfo, setUserInfo] = useState(initialState);
    const [data, setData] = useState([])

    const handelInputChange = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        let isValid = true;

        if (!userInfo.firstName) {
            errors.firstName = "Please enter your first name";
            isValid = false;
        }

        if (!userInfo.lastName) {
            errors.lastName = "Please enter your last name";
            isValid = false
        }

        if (!userInfo.email) {
            errors.email = "Please enter your email id";
            isValid = false
        }

        if (!userInfo.password) {
            errors.password = "Please enter your password";
            isValid = false
        }

        if (!userInfo.confirmPassword) {
            errors.confirmPassword = "Please enter your confirm password";
            isValid = false
        } else if (userInfo.password !== userInfo.confirmPassword) {
            errors.confirmPassword = "Password do not match."
            isValid = false
        }

        setUserInfo({ ...userInfo, errors });

        if (isValid) {
            setData([...data, { fullName: userInfo.firstName + userInfo.lastName, email: userInfo.email, password: userInfo.password }])
            setUserInfo(initialState)
        }

    }

    console.log(data);
    return (
        <div className='SingUp'>
            <form onSubmit={handelSubmit}>
                <div>
                    <input name='firstName' value={userInfo.firstName} placeholder='Enter first name...' onChange={handelInputChange} />
                    {userInfo.errors.firstName && <p className="pTag">{userInfo.errors.firstName}</p>}
                </div>
                <div>
                    <input name='lastName' value={userInfo.lastName} placeholder='Enter last name...' onChange={handelInputChange} />
                    {userInfo.errors.lastName && <p className="pTag">{userInfo.errors.lastName}</p>}
                </div>
                <div>
                    <input name='email' value={userInfo.email} placeholder='Enter email id...' onChange={handelInputChange} />
                    {userInfo.errors.email && <p className="pTag">{userInfo.errors.email}</p>}
                </div>
                <div>
                    <input name='password' value={userInfo.password} placeholder='Enter password...' onChange={handelInputChange} />
                    {userInfo.errors.password && <p className="pTag">{userInfo.errors.password}</p>}
                </div>
                <div>
                    <input name='confirmPassword' value={userInfo.confirmPassword} type="password" placeholder='Enter confirm password...' onChange={handelInputChange} />
                    {userInfo.errors.confirmPassword && <p className="pTag">{userInfo.errors.confirmPassword}</p>}
                </div>
                <div className='singIn'>
                    <input type="submit" value="Sign In" />
                </div>
            </form>
            <div className='link'>
                <hr className='hrIS me-3' />
                <Link to="/login">SingIn</Link>
                <hr className='hrIS ms-3' />
            </div>
        </div>
    )
}

export default SingUp