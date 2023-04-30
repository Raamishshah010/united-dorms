import React from 'react';
import logout from './assets/logout.png';
import image from './assets/image.png';
import './AddDorm.css'

import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';
import Footer from '../../utils/Footer/Footer';
import Form from 'react-bootstrap/Form';


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
                            <button className='btn btn-map'>Select Location Via Maps</button>

                        </div>



                        <div className="input inputFile">
                            <input type="file" className="hiddenInput" />
                            <div className="overflowText">
                                <p>Add Image Or Video</p>

                                <img className="placeholderImage" src={image} alt="" />

                            </div>
                        </div>

                        <div className="radioSelect">
                            <h5>Choose The Type Of Room</h5>

                            <div className="row">
                                <div className="col-lg-6">
                                    <Form.Check
                                        inline
                                        label="Single Room"
                                        type="radio"
                                    />

                                </div>
                                <div className="col">
                                    <Form.Check
                                        inline
                                        label="Double Room"
                                        type="radio"
                                    />

                                </div>
                                <div className="col">
                                    <Form.Check
                                        inline
                                        label="Single Room"
                                        type="radio"
                                    />

                                </div>
                            </div>


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
            <Footer />
        </>
    )
}

export default AddDorm