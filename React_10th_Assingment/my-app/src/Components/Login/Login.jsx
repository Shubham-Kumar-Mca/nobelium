import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import "../Comman.css"

const Login = () => {
    return (
        <div className="LoginContainer">
            <div className="formContainer">
                <img src="https://i.ibb.co/ZJ88Xfd/My-Picture.jpg" alt="" />

                <form className="form">
                    <div>
                        <span><FaUserAlt /></span>
                        <input type="text" placeholder='User Name' />
                    </div>
                    <div>
                        <span><AiFillLock /></span>
                        <input type="text" placeholder='Password' />
                    </div>


                </form>
                <div className="loginBtn">
                    <button >Login</button>
                </div>
            </div>

        </div>
    )
}

export default Login