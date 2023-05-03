import React from 'react'
import './Register.css';

import { RiLockFill, RiMailFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Footer from '../../utils/Footer/Footer';

const Register = () => {
    return (
        <>
        
        <div className="LoginNavbar">
            <h5>United Dorms</h5>
        </div>
        

        <div className="loginForm">
            <h5>Sign in to continue</h5>

            <div className="loginField">
                <span><RiMailFill/></span>
                <input type="text" placeholder="Choose a usename" />
            </div>

            <div className="loginField">
                <span><RiMailFill/></span>
                <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="loginField">
                <span><RiMailFill/></span>
                <input type="email" placeholder="Enter Your Email Address" />
            </div>

            <div className="loginField">
                <span><RiLockFill/></span>
                <input type="password" placeholder="Password" />
            </div>
                <small className='small-text'>Passwords must have at least 8 characters and contain at least two of the following: uppercase letters, lowercase letters, numbers, and symbols.</small>

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

export default Register 