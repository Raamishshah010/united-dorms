import React from 'react';
import logout from './assets/logout.png';
import './AddDorm.css'

import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';
import Footer from '../../utils/Footer/Footer';

const AddDorm = () => {
    return (
        <>
            <div className="LoginNavbar">
                <div className="backBtn float-start" >
                    <span ><Link className="backIcon" to="/admin/dashboard"><MdKeyboardBackspace /></Link></span>
                </div>
                <h5>United Dorms</h5>

                <div className="logoutButton">
                    <img src={logout} alt="" />
                </div>
            </div>

            <div className="addBlogMain">
                <div className="container">
                    <h1>Add New Dorm</h1>
                    <div className="inputs">

                        <div className="input">
                            <input type="text" id='dormId' placeholder="Enter Dorm ID" />
                        </div>

                        <div className="input">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter Dorm Detail"></textarea>
                        </div>

                        <div className="input">
                            <input type="text" id='dormId' placeholder="Enter Rent Details $$$" />
                        </div>
                        
                        <div className="input">
                            <button className='addDorm'>Save</button>
                        </div>

                    </div>
                </div>
            </div>

        {/* FOOTER */}
        <Footer/>
        </>
    )
}

export default AddDorm