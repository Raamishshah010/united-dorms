import React from 'react';
import './Footer.css';


import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <>
        
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-sm-5">
                        <div className="contactBtn">
                            <button>Contact Us</button>
                        </div>

                        <h3>Contact@uniteddorms.com</h3>

                        <div className="socialMedia">
                            <p>Social Media</p>
                            <div className="socialMediaIcons">

                                <span className="socialMediaIcon">
                                    <FaFacebookF className='fIcon'/>
                                </span>

                                <span className="socialMediaIcon">
                                    <FaInstagram className='fIcon'/>
                                </span>

                                <span className="socialMediaIcon">
                                    <FaTwitter className='fIcon'/>
                                </span>


                            </div>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-7 col-sm-7">Hello</div>
                </div>
                <hr />
                <p className="copyright">Copyright 2023 United Dorms. All rights reserved.</p>
            </div>
        </div>
        
        </>
    )
}

export default Footer