import React from 'react';
import './Dashboard.css';

import logout from './assets/logout.png'
import { Link } from 'react-router-dom';

import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";


const Dashboard = () => {
    return (
        <>
            <div className="LoginNavbar">
                <h5>United Dorms</h5>

                <div className="logoutButton">
                    <img src={logout} alt="" />
                </div>
            </div>


            {/* Dashboard  */}

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

        {/* Dashboard Stats */}
        
        <section className="dashboardStats">
            <div className="container">
                <h5>Quick Stats</h5>

                <div className="row mt-5">
                    
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="statsCard">
                            <h6>Total Bookings</h6>
                            <h1>28,523</h1>
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="statsCard">
                            <h6>Pending Approval</h6>
                            <h1 className="colorDanger">12</h1>
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="statsCard">
                            <h6>New Students This Month</h6>
                            <h1>89 <span className="link statsGraph"> <BiTrendingUp/></span></h1>
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="statsCard">
                            <h6>Returning Students</h6>
                            <h1>47% <span className="colorDanger statsGraph"> <BiTrendingDown/></span></h1>
                        </div>
                    </div>


                    
                </div>
            </div>
        </section>

        </>
    )
}

export default Dashboard