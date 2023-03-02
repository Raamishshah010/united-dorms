import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                            />

                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />

                            
                        </Carousel.Item>
                    </Carousel>

                </div>
            </section>
        </>
    )
}

export default Gallery