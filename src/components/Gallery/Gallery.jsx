import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../utils/Footer/Footer';
import './Gallery.css';


const Gallery = () => {
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

                            <Nav.Link className="navLink active"><Link className="navText" to="/gallery">Gallery</Link></Nav.Link>

                            <Nav.Link className="navLink"><Link className="navText" to="/">Testimonials</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/">About</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/blogs">Blogs</Link></Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* GALLERY MAIN */}

            <section className="galleryMain">
                <div className="container">
                    <h1 className='link'>Gallery</h1>
                    <h2>The Comfort of your <span className='link'>Home</span></h2>

                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./homeBg.jpg"
                                alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./homeBg.jpg"
                                alt="Second slide"
                            />

                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./homeBg.jpg"
                                alt="Third slide"
                            />

                            
                        </Carousel.Item>
                    </Carousel>

                </div>
            </section>


            {/* Gallery Images */}
            <section className="gallerySecondary">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="./homeBg.jpg" className="galleryShowImg img-fluid" alt="" />
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="./homeBg.jpg" className="galleryShowImg img-fluid" alt="" />
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="./homeBg.jpg" className="galleryShowImg img-fluid" alt="" />
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="./homeBg.jpg" className="galleryShowImg img-fluid" alt="" />
                        </div>


                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer/>
        </>
    )
}

export default Gallery