import React from 'react';
import "./Home.css"
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

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
                <button className='heroButtonTwo'>Book Now</button>
            </div>
            </div>
            </section>

            {/* FEATURE SECTION */}

            <section className="feature">
                <div className="container">
                    <div className="featureBadge">
                        <h6>Features</h6>
                    </div>
                        <h1>The Comfort Of Your <span className='link'>Home</span></h1>
                </div>
            </section>

        </>
    )
}

export default Home