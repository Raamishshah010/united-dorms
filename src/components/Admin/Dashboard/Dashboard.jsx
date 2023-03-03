import React from 'react';
import './Dashboard.css';

import logout from './assets/logout.png'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <div className="LoginNavbar">
                <h5>United Dorms</h5>

                <div className="logoutButton">
                    <img src={logout} alt="" />
                </div>
            </div>


            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 p-5">

                            <h1>Dashobard</h1>
                            <h5 className="link">Welcome Back</h5>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 p-5 dashboardButtons">

                            <Link to='/admin/add-dorm'><button className="dashboardBtn"> Add New Dorm</button></Link> <br />
                            <Link to='/admin/add-blog'><button className="dashboardBtn"> Add New Blog</button></Link>

                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default Dashboard