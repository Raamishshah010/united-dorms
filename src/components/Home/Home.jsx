import React, { useEffect, useState } from 'react';
import "./Home.css"
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Footer from '../utils/Footer/Footer';
import { FiArrowRight } from "react-icons/fi";

// IMAGES

import star from './assets/star.png';
import map from './assets/map.png';
import creditCard from './assets/creditCard.png';
import crown from './assets/crown.png';
import why1 from './assets/why1.jpg';
import why2 from './assets/why2.jpg';
import why3 from './assets/why3.jpg';
import why4 from './assets/why4.jpg';
import Slider from 'react-slick';
import axios from 'axios';




const Home = () => {


    let settings_3 = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
                            <Nav.Link className="navLink active"><Link className="navText" to="/">Home</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/gallery">Gallery</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/">Testimonials</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/">About</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/blogs">Blogs</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/student-dashboard">Profile</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* HERO SECTION */}
            <section className='hero'>
                <div className="container">

                    <h5>About <span className="heroText">United</span> Dorms</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore alias consectetur at, velit minima aspernatur, voluptas, dicta porro commodi error enim a quia molestias animi ipsa dolor vero aut?</p>

                    <div className="heroBtn">
                        <button className='heroButtonOne'>Book Now</button>
                        <button className='heroButtonTwo'>Learn More</button>
                    </div>
                </div>
            </section>

            {/* FEATURE SECTION */}

            <section className="feature">
                <div className="container">
                    <div className="featureBadge">
                        <h6>Features</h6>
                    </div>
                    <h1>The Comfort of your <span className='link'>Home</span></h1>


                    <div className="row">


                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="featureCard">
                                <div className="featureCardImg">
                                    <img src={star} alt="" />
                                </div>

                                <div className="featureCardContent">
                                    <h5>Otel Konspeti</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab error voluptatem porro animi optio dolor sit.</p>
                                </div>

                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="featureCard">
                                <div className="featureCardImg">
                                    <img src={map} alt="" />
                                </div>

                                <div className="featureCardContent">
                                    <h5>Otel Konspeti</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab error voluptatem porro animi optio dolor sit.</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="featureCard">
                                <div className="featureCardImg">
                                    <img src={creditCard} alt="" />
                                </div>

                                <div className="featureCardContent">
                                    <h5>Otel Konspeti</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab error voluptatem porro animi optio dolor sit.</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="featureCard">
                                <div className="featureCardImg">
                                    <img src={crown} alt="" />
                                </div>

                                <div className="featureCardContent">
                                    <h5>Otel Konspeti</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab error voluptatem porro animi optio dolor sit.</p>
                                </div>

                            </div>
                        </div>




                    </div>



                </div>
            </section>


            {/* What We Do Section */}

            <section className="whatWeDo">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="whatWeDoContent">
                                <h1>What We Do?</h1>
                                <br />
                                <br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officia deleniti delectus obcaecati in, consequuntur, similique, commodi sed dicta aspernatur voluptas veritatis beatae odit magnam molestias exercitationem veniam consectetur nostrum!</p>

                                <button className='heroButtonOne mt-5'>Book Now</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="row">

                                <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
                                    <div className="why1">
                                        <img src={why1} className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
                                    <div className="why2">
                                        <img src={why2} className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
                                    <div className="why3">
                                        <img src={why3} className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
                                    <div className="why4">
                                        <img src={why4} className="img-fluid" alt="" />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials */}

            <section className="testimonials">

                <div className="testimonialsBadge">
                    <h6>Testimonials</h6>
                </div>
                <h1 className='text-center'><span className='heading'>Trusted</span> By 100's <br /> Of Users
                    <span className='userImg_1'> <img src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=" width="30px" height="30px" alt="" /></span>
                    <span className='userImg_2'> <img src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=" width="30px" height="30px" alt="" /></span>
                    <span className='userImg_3'> <img src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=" width="30px" height="30px" alt="" /></span>

                </h1>

                <Slider {...settings_3}>

                    <div className='testimonialCard'>
                        <h5>Super Helpful !!!!</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam deserunt perferendis obcaecati veritatis consectetur aliquid alias, veniam cum! Quam veritatis repellat hic quas dolorem incidunt harum fuga obcaecati autem cum!</p>

                        <div className="testimonialBottom">
                            <div className="clientImg">
                                <img src={why3} width="40px" height="40px" alt="client Img" />
                            </div>
                            <div className="clientInfo">
                                <h6>Anna Gates</h6>
                                <p>Web Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className='testimonialCard'>
                        <h5>Super Helpful !!!!</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam deserunt perferendis obcaecati veritatis consectetur aliquid alias, veniam cum! Quam veritatis repellat hic quas dolorem incidunt harum fuga obcaecati autem cum!</p>

                        <div className="testimonialBottom">
                            <div className="clientImg">
                                <img src={why3} width="40px" height="40px" alt="client Img" />
                            </div>
                            <div className="clientInfo">
                                <h6>Anna Gates</h6>
                                <p>Web Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className='testimonialCard'>
                        <h5>Super Helpful !!!!</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam deserunt perferendis obcaecati veritatis consectetur aliquid alias, veniam cum! Quam veritatis repellat hic quas dolorem incidunt harum fuga obcaecati autem cum!</p>

                        <div className="testimonialBottom">
                            <div className="clientImg">
                                <img src={why3} width="40px" height="40px" alt="client Img" />
                            </div>
                            <div className="clientInfo">
                                <h6>Anna Gates</h6>
                                <p>Web Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className='testimonialCard'>
                        <h5>Super Helpful !!!!</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam deserunt perferendis obcaecati veritatis consectetur aliquid alias, veniam cum! Quam veritatis repellat hic quas dolorem incidunt harum fuga obcaecati autem cum!</p>

                        <div className="testimonialBottom">
                            <div className="clientImg">
                                <img src={why3} width="40px" height="40px" alt="client Img" />
                            </div>
                            <div className="clientInfo">
                                <h6>Anna Gates</h6>
                                <p>Web Designer</p>
                            </div>
                        </div>
                    </div>


                </Slider>


            </section>

            {/* BLOGS */}


            <section className="blogs">

                <div className="container">
                    <div className="featuredBlog">
                        <h5>Featured Blog</h5>
                    </div>

                    <div className="row">

                        
                        {/* {
                            data.map((item) => (
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
                            ))
                        } */}




                    </div>

                </div>
            </section>


            {/* Footer */}

            <Footer />
        </>
    )
}

export default Home