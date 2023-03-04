import React from 'react';
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
        
        </>
    )
}

export default AddBlog