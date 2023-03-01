import React from 'react'
import './Login.css';

import { RiLockFill, RiMailFill } from "react-icons/ri";

const Login = () => {
    return (
        <>
        
        <div className="LoginNavbar">
            <h5>United Dorms</h5>
        </div>
        

        <div className="loginForm">
            <h5>Sign in to continue</h5>

            <div className="loginField">
                <span><RiMailFill/></span>
                <input type="email" placeholder="Email Address" />
            </div>

            <div className="loginField">
                <span><RiLockFill/></span>
                <input type="password" placeholder="Password" />
            </div>


        </div>
        
        </>
    )
}

export default Login