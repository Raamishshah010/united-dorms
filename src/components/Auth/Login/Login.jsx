import React, { useState } from 'react'
import './Login.css';

import { RiLockFill, RiMailFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../utils/Footer/Footer';
import axios from 'axios';



const Login = () => {

    const [responseData, setResponseData] = useState([]);

    const [email, setEmail] = useState('');
    const getEmail = (e) => {
        setEmail(e.target.value);

    }
    const [password, setPassword] = useState('');
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate()



    const handleLogin = async () => {

        let data = {
            email,
            password
        }

        if (email === "admin@admin.com") {
            await axios.post('http://3.84.54.19/api/user_login', data)
                .then(response => {
                    setResponseData(response.data);

                    navigate('/admin/dashboard')

                })
                .catch(error => {
                    window.alert(error.message);
                });
        } else {
            try {
                await axios.post('http://backend.uni-hive.net/api/user_login', data)
                    .then(response => {
                        setResponseData(response.data);
                        console.log(responseData);
                        navigate('/')
                        

                    })
                    .catch(error => {
                        window.alert(error.message);
                    });
            } catch (error) {
                window.alert(error.message);

            }

        }


    }

    return (
        <>

            <div className="LoginNavbar">
                <h5>United Dorms</h5>
            </div>


            <div className="loginForm">
                <h5>Sign in to continue</h5>

                <div className="loginField">
                    <span><RiMailFill /></span>
                    <input type="email" placeholder="Email Address" onChange={getEmail} />
                </div>

                <div className="loginField">
                    <span><RiLockFill /></span>
                    <input type="password" placeholder="Password" onChange={getPassword} />
                </div>

                <span className="forgotLink">Forgot Password?</span>

                <div className="loginBtn">
                    <button onClick={handleLogin} className="signInBtn">Sign In</button>
                </div>

                <h6>New To United Dorms? <Link className='link' to="/register">Sign Up</Link></h6>

            </div>


            <Footer />

        </>
    )
}

export default Login