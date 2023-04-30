import React from 'react';
import './AddBlog.css'

import logout from './assets/logout.png'
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';


const AddBlog = () => {
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
                    <h1>Add New Blog Post</h1>
                    <input type="text" id='dormId' placeholder="Add a title" />
                </div>
            </div>
        
        </>
    )
}

export default AddBlog