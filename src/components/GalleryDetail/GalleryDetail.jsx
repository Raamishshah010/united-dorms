import React, { useState } from 'react';
import './GalleryDetail.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../utils/Footer/Footer';

import whatsapp from './assets/whatsapp.png'

const GalleryDetail = () => {

    const [toggleButton, setToggleButton] = useState('hide')

    const handleButton = () => {
        console.log('as');
        setToggleButton('show')
    }

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
                            <Nav.Link className="navLink"><Link className="navText" to="/student-dashboard">Profile</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            {/* GALLERY DETAIL MAIN */}
            <section className="galleryDetailMain">
                <div className="container">
                    <h6 className='link text-center'>Gallery</h6>
                    <h1 className='title text-center'>Dorm Id 4566</h1>

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                            <img src="/homeBg.jpg" className='img-fluid' alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                            <img src="/homeBg.jpg" className='img-fluid' alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                            <img src="/homeBg.jpg" className='img-fluid' alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                            <img src="/homeBg.jpg" className='img-fluid' alt="" />
                        </div>
                    </div>

                    <div className="container mt-5">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam atque amet porro facere perferendis cupiditate obcaecati recusandae maiores architecto minima, quos aperiam, incidunt similique modi dolore quibusdam ullam itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta atque voluptatum autem ut maiores. Officiis reiciendis quas accusamus similique aliquam, laborum voluptatum repudiandae illo fugiat aperiam unde labore nisi quasi!</p>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam atque amet porro facere perferendis cupiditate obcaecati recusandae maiores architecto minima, quos aperiam, incidunt similique modi dolore quibusdam ullam itaque.</p>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam atque amet porro facere perferendis cupiditate obcaecati recusandae maiores architecto minima, quos aperiam, incidunt similique modi dolore quibusdam ullam itaque.</p>


                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam atque amet porro facere perferendis cupiditate obcaecati recusandae maiores architecto minima, quos aperiam, incidunt similique modi dolore quibusdam ullam itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta atque voluptatum autem ut maiores. Officiis reiciendis quas accusamus similique aliquam, laborum voluptatum repudiandae illo fugiat aperiam unde labore nisi quasi!</p>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam atque amet porro facere perferendis cupiditate obcaecati recusandae maiores architecto minima, quos aperiam, incidunt similique modi dolore quibusdam ullam itaque.</p>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam atque amet porro facere perferendis cupiditate obcaecati recusandae maiores architecto minima, quos aperiam, incidunt similique modi dolore quibusdam ullam itaque.</p>


                        <p className="text-center"><button className='heroButtonOne' onClick={handleButton}>Book Now</button></p>


                        <div className={`numberDetails ${toggleButton}`}>
                            <div className="numberIcon">
                                <img src={whatsapp} alt="" />
                            </div>
                            <div className="numberDetail">
                                <h5>+92 12451251</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <Footer />
        </>
    )
}

export default GalleryDetail