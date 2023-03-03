import React from 'react'
import './Login.css';

import { RiLockFill, RiMailFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Footer from '../../utils/Footer/Footer';

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

            <span className="forgotLink">Forgot Password?</span>

            <div className="loginBtn">
                <Link to="/" className="signInBtn">Sign In</Link>
            </div>

            <h6>New To United Dorms? <Link className='link' to="/register">Sign Up</Link></h6>

        </div>


        <Footer/>
        
        </>
    )
}

export default Login