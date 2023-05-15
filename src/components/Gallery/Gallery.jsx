import React, { useEffect, useState } from 'react';
import { Carousel, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../utils/Footer/Footer';
import './Gallery.css';
import { BiEdit, BiSearch } from "react-icons/bi";
import { FaLaptop, FaStar, FaWifi, FaWindowMaximize } from 'react-icons/fa';
import axios from 'axios';


const Gallery = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://3.84.54.19/api/get_all_dorms', {

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

                            <Nav.Link className="navLink active"><Link className="navText" to="/gallery">Gallery</Link></Nav.Link>

                            <Nav.Link className="navLink"><Link className="navText" to="/">Testimonials</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/">About</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/blogs">Blogs</Link></Nav.Link>
                            <Nav.Link className="navLink"><Link className="navText" to="/student-dashboard">Profile</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* GALLERY MAIN */}

            <section className="galleryMain">
                <div className="carousalContent">

                    <h1 className='link'>Gallery</h1>
                    <h2>The Comfort of your <span className='link'>Home</span></h2>

                    <div className="row d-flex align-items-center">
                        <div className="col-lg-4">
                            <Form.Check
                                inline
                                label="Single Room"
                                type="radio"
                            />

                        </div>
                        <div className="col-lg-4">
                            <Form.Check
                                inline
                                label="Double Room"
                                type="radio"
                            />

                        </div>
                        <div className="col-lg-4">
                            <Form.Check
                                inline
                                label="Suit"
                                type="radio"
                            />

                        </div>
                    </div>

                </div>
                <Carousel fade className='carouselMain'>
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

            </section>


            {/* Gallery Images */}
            <section className="gallerySecondary">
                <div className="container">

                    <div className="dormSearchs">
                        <div className="dormSearch">
                            <span>
                                <BiSearch />
                            </span>

                            <input type="text" className="searchInput" placeholder="Search" />
                        </div>
                    </div>

                    <div className="dormfilters">
                        <div className="dormfilter">
                            <Form.Select className='filterSelect' aria-label="Default select example">
                                <option>Filter</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </div>


                    <div className="row ">

                        <div className="col-sm-12 col-md-6 col-lg-4 dormGalleryCards">
                            <div className="card text-left">

                                <div className="galleryCardImg">
                                    <span className="editIcon">
                                        <BiEdit />
                                    </span>
                                    <img className="card-img-top" src="./homeBg.jpg" alt="" />
                                    <div className="rating">

                                        <div className="ratingStar">
                                            <FaStar />
                                        </div>

                                        <div className="ratingStar">
                                            <FaStar />
                                        </div>

                                        <div className="ratingStar">
                                            <FaStar />
                                        </div>

                                        <div className="ratingStar">
                                            <FaStar />
                                        </div>

                                        <div className="ratingStar">
                                            <FaStar />
                                        </div>


                                    </div>
                                </div>


                                <div className="card-body">
                                    <Link to="/gallery-detail" className="card-title">NURAL DORM</Link>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam laborum iure rerum modi architecto repellat quos eum voluptatibus. At dolorem aut odio explicabo mollitia quae illum dignissimos veritatis omnis.</p>

                                    <div className="cardBottom">
                                        <div className="bottomIcons">
                                            <span>
                                                <FaWifi />

                                            </span>
                                            <span>
                                                <FaWindowMaximize />

                                            </span>
                                            <span>
                                                <FaLaptop />

                                            </span>
                                        </div>
                                        <div className="cardBottomPrice">
                                            <h5>$400</h5>
                                        </div>


                                    </div>

                                </div>
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

export default Gallery