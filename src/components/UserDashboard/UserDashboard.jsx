import React from 'react'
import './UserDashboard.css'



import logout from './assets/logout.png'
import profile from './assets/profile.png'
import { BiEdit } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
    return (
        <>
            <div className="LoginNavbar">
                <h5>United Dorms</h5>

                <div className="logoutButton">
                    <img src={logout} alt="" />
                </div>
            </div>

            <div className="userDashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-7">
                            <div className="userDashboardContent">
                                <h5>Hello</h5>
                                <h1>Jonathan!</h1>
                                <p>Copy your bio link & paste it in your profile, <br /> to let people find you</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-5">
                            <img src={profile} alt="" />
                        </div>
                    </div>


                    <div className="studentInfoTable">
                        <div className="studentTableTop">
                            <span className='editIcon'><BiEdit /></span>
                            <h5>My Details</h5>
                        </div>

                        <div className="studentInfoName">
                            <h6>Name Here</h6>
                        </div>

                        <div className="studentInfoName">
                            <h6>Email Address</h6>
                        </div>

                        <div className="studentInfoName">
                            <h6>Collage / University</h6>
                        </div>

                        <div className="studentInfoName">
                            <h6>Home Address</h6>
                        </div>

                        <div className="studentInfoName">
                            <h6>Identity Number</h6>
                        </div>

                        <div className="studentInfoName">
                            <h6>Joined On 02 Feb 2022</h6>
                        </div>

                        <div className="studentInfoName">
                            <h6>Membership Ending on 20 june 2023. <span className='ml-5 '><Link to="/" className='renewLink'>Renew It</Link></span></h6>
                        </div>


                    </div>



                </div>
            </div>


        </>

    )
}

export default UserDashboard