import React, { useEffect, useState } from 'react';
import './Blogs.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Footer from '../utils/Footer/Footer';


import why4 from './assets/why4.jpg';
import axios from 'axios';

const Blogs = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://3.84.54.19/api/get_all_blogs', {

                    headers: {
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDNlMTFjNjUxZWNiOWNjMDFlZjVlZTlhODM5NzRkMTMyM2ZhMjIwNTI2ODdmMzhlNWM2MzU2YThhZmQyMGI5Njk2YWZiZWJkZTVjMjAyMDciLCJpYXQiOjE2ODQxNjkzNDIuNDEyODgyLCJuYmYiOjE2ODQxNjkzNDIuNDEyODg0LCJleHAiOjE3MTU3OTE3NDIuNDA4NTQ3LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.KySFMAiTJLPF9bRiUewzkjs4aiKHvU2CSskS0qOBMbbRFMqVA9oP9u3qzCF5UrXQfbCGipRmn_mZRHzt8bm3mIHOZ6fZn4FbmJfKLyHWrazMdcoRTH8vEsx2euey5dJ0N65ZzkKsjHgq1Hf7u3HuD0zXmEnHjFEnCw_ScvP0eO6hK2SpBUqffbcry0MrJ_2tHOaPrYEhgNiON6jnPvwD40xpFXMzhJxKJHID9n7OhJJxlwVkb3BKyxtW0BGuByUu1XwelZIUQW8QdgJ5UMvkvAO3f5oojbq_lMgy6mHlopt9OjbgnAh4Di4jE_qagaSjUMjNknwzrxVbir7I2zgFyHN7wq14O_s3zbNyhz1k2ddXpCPfzx3KzrGU16PgyZ3MSKwhE5aKbYCGpBFwKYaX3zTtTp9ApoumcBakvqbdf22x9wbc-sCgzOal_HLktjeVe3d_I5pb03kIbBTHgVAd-PfuphTUPM-7VCDxr3w9_7nhNNjNzPiW94VAJw9yhSg7EA1cmfuQG2KjyEKf3MJs60XteCMuiffyhkuwXCcBUEzIvK-6pv2AhAkmPhwDls5s-4_sJoHuPr6Lf0OguLPBe9KVCgTVmaCNCvVfocu2g0VPreempYv6YK16_Le5ICMNvqfllnCNpHVCVqBIeW-ugvNV2w-BLbuQUERT1OR31EE"
                    },
                });
                await setData(response.data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [data]);


    return (
        <>
            {/* NAVBAR */}
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand><Link className='navLogo'>United Dorms</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navLinks">
                            <Nav.Link className="navLink "><Link className="navText" to="/">Home</Link></Nav.Link>

                            <Nav.Link className="navLink"><Link className="navText" to="/gallery">Gallery</Link></Nav.Link>

                            <Nav.Link className="navLink"><Link className="navText" to="/">Testimonials</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/">About</Link></Nav.Link>
                            <Nav.Link className="navLink active"><Link className="navText" to="/blogs">Blogs</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/student-dashboard">Profile</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




            {/* BLOGS */}


            <section className="blogs">

                <div className="container">
                    <h1><span className='heading'>The Knowledge</span> Hub</h1>

                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="blogCard">
                                <div className="blogCardImg">
                                    <span className="blogCardBadge">Student</span>
                                    <img src={why4} className="img-fluid" alt="" />
                                </div>
                                <div className="blogCardContent">
                                    <Link className="cardLink" to="/blog-detail"> <h5>Put a simple title here in this space</h5></Link>

                                    <div className="contentBottom">
                                        <p>7 mins read - September 20</p>
                                        <div className="cardIcon">
                                            <span >
                                                <FiArrowRight className="icon" />
                                            </span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="blogCard">
                                <div className="blogCardImg">
                                    <span className="blogCardBadge">Student</span>
                                    <img src={why4} className="img-fluid" alt="" />
                                </div>
                                <div className="blogCardContent">
                                    <Link className="cardLink" to="/blog-detail"> <h5>Put a simple title here in this space</h5></Link>

                                    <div className="contentBottom">
                                        <p>7 mins read - September 20</p>
                                        <div className="cardIcon">
                                            <span >
                                                <FiArrowRight className="icon" />
                                            </span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="blogCard">
                                <div className="blogCardImg">
                                    <span className="blogCardBadge">Student</span>
                                    <img src={why4} className="img-fluid" alt="" />
                                </div>
                                <div className="blogCardContent">
                                    <Link className="cardLink" to="/blog-detail"> <h5>Put a simple title here in this space</h5></Link>

                                    <div className="contentBottom">
                                        <p>7 mins read - September 20</p>
                                        <div className="cardIcon">
                                            <span >
                                                <FiArrowRight className="icon" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    
                    <div className="customButton">
                    <button className="btn btn-custom">View More</button>
                    </div>

                </div>
            </section>


            {/* Main Blog */}
            <section className="mainBlog">
                <div className="container">
                    <div className="mainBlogsCards">

                        <div className="mainBlogsCard">
                            <div className="mainBlogsCardContent">
                                <h6>Students</h6>
                                <h1>Meet New Faces</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis harum adipisci doloremque beatae nam obcaecati consequuntur illum, autem voluptatibus est esse vitae aut reprehenderit soluta quod molestiae asperiores facere. <span><Link className="link" to='/blog-detail'>Read More</Link></span> </p>
                            </div>
                            <div className="mainBlogsCardImg">
                                <img src={why4} alt="" />
                            </div>
                        </div>
                        <hr />

                        <div className="mainBlogsCard">
                            <div className="mainBlogsCardContent">
                                <h6>Students</h6>
                                <h1>Meet New Faces</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis harum adipisci doloremque beatae nam obcaecati consequuntur illum, autem voluptatibus est esse vitae aut reprehenderit soluta quod molestiae asperiores facere. <span><Link className="link" to='/blog-detail'>Read More</Link></span> </p>
                            </div>
                            <div className="mainBlogsCardImg">
                                <img src={why4} alt="" />
                            </div>
                        </div>
                        <hr />

                        <div className="mainBlogsCard">
                            <div className="mainBlogsCardContent">
                                <h6>Students</h6>
                                <h1>Meet New Faces</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis harum adipisci doloremque beatae nam obcaecati consequuntur illum, autem voluptatibus est esse vitae aut reprehenderit soluta quod molestiae asperiores facere. <span><Link className="link" to='/blog-detail'>Read More</Link></span> </p>
                            </div>
                            <div className="mainBlogsCardImg">
                                <img src={why4} alt="" />
                            </div>
                        </div>
                        <hr />


                    </div>

                    
                    <div className="customButton">
                    <button className="btn btn-custom">View More</button>
                    </div>

                </div>
            </section>




            {/* Footer */}

            <Footer />

        </>
    )
}

export default Blogs