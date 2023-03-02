import React from 'react';
import "./Home.css"
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';


// IMAGES

import star from './assets/star.png';
import map from './assets/map.png';
import creditCard from './assets/creditCard.png';
import crown from './assets/crown.png';
import why1 from './assets/why1.jpg';
import why2 from './assets/why2.jpg';
import why3 from './assets/why3.jpg';
import why4 from './assets/why4.jpg';
import Footer from '../utils/Footer/Footer';



const Home = () => {
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

                            <Nav.Link className="navLink"><Link className="navText" to="/">Gallery</Link></Nav.Link>

                            <Nav.Link className="navLink"><Link className="navText" to="/">Testimonials</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/">About</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/">Blogs</Link></Nav.Link>


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


            {/*  */}



            {/* Footer */}

            <Footer/>
        </>
    )
}

export default Home