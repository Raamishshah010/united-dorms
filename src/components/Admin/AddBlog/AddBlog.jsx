import React, { useState } from 'react';
import './AddBlog.css'

import logout from './assets/logout.png'
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import image from './assets/image.png';
import axios from 'axios';


const AddBlog = () => {
    // let YOUR_ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmYxYWNiOTVmMjRjNzFkMGI5NTlmZjRmZGUwNmI1MTNmYjc3ZDMyYzFiYTIwZTEwYTVmNTc2MDNkMTFmOWYyZDljNGNmM2RiNDFmMjc4MjUiLCJpYXQiOjE2ODQwNzk5MjUuMDMwMDczLCJuYmYiOjE2ODQwNzk5MjUuMDMwMDc1LCJleHAiOjE3MTU3MDIzMjUuMDI1NDg0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lCFyKORnlLCOnwEFXNkdGitwZCQ4M8q48tiaU_EgwOPhNGXqq2B-q06bCWFLAIlkqGv5qGI2Wc8S8tpJTRvvoQSX28AXWKy6govP0fMA0lalij8p7TGuPJT4glGS8gJHwjY0hm52w7R6tlZC9grsGZBpOiHaSxfmhPcdBYopQNFZbIrUfx_erS1knuwgETvuyhG-9IzrjzoqTre3t5b-XZiMw2134UQ1Nsaif_pm4HIArKrLKm4ViSqP0jRXF2WES3g-HIeiK_IVKSzCLuZLW-OG_gF53kndc2M9G_VjNRnQfmx5X0DB6t8Pq5Ow0nidnrYjjtheekR0P8pXGrrBloKroVP77gTeq8OitQYfOiiHmIreXYWY19j6tPi0xKOLn4mVcs3drtvDqfvlVsgeuEgSLm7sUOFCrjAYBVb3jreUiXYMpaAH20fjQA8CbkSdv4YlpHPzDnLCxcdxsBZ8c-hlZq4ZrH_L5xoLNO7yZh8ZCmjxRV-ewqLMEE2zCtC6_R-5Lu6h6N4yXIvdNXWEdJItcpKDHtYpvmACCzIW12OiZTtkkbL3uB2fuR6hNMQJbeyibspqayGMXh0uQ93lRa2HNK4a-HLgp7wG_nTk8S9SI3o4QJDHvgJiAW6OaeDNPEsII-ty4DIxuNUB1utlVT1_qSRDk_AYc5tZG-F9ADA';



    const [title, setTitle] = useState("");
    const handleTitle = (e) => {
        setTitle(e.target.value)
        console.log(title);
    }

    const [description, setDescription] = useState("")
    const handleDescription = (e) => {
        setDescription(e.target.value)
        console.log(description);
    }
    const [file, setFile] = useState(null)
    const handleImage = (e) => {
        setFile(e.target.files[0]);
        console.log(file);

    }

    let data = {
        title,
        body: description,
        image: file
    }
    const formData = new FormData();
    formData.append('image', file);


    const addBlog = (e) => {
        e.preventDefault();
        axios.post('http://backend.uni-hive.net/api/add_new_blog_post', data,{
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODZjZjVlMzcxZWU3ODdmNTRhNTg3MTE2YWFlYzA3Y2JjY2Q1MTMxMGMzMTVjYjc4YjFjNmJjNjE3MDA2ODdiZDJhNDE4NWQ1NTFmMGY2OTkiLCJpYXQiOjE2ODQwNzg4MjYuMjAzNzQxLCJuYmYiOjE2ODQwNzg4MjYuMjAzNzQzLCJleHAiOjE3MTU3MDEyMjYuMTg5MzU4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.MPse2XpX14uq2lc6MLhwQc7AFGAzUJVk1ECTMYyGBLeu3lnc08W5nyMSUGp9MuYsJkF7I89uwYPtP9LIiKRZZyA8JOv12gBeC8WpROBTomDeHkVH1n6XEduS-9MTpqj6Pr5HFSbZRkjxizSiZqA_mxP8f2ycFnsIVJt2l1rOw_vvjSJURARx_JEdsR8jG3MnoN36lZF8EiLj3Fcywp7HCx_Grr_J406kiGlNI0MIDJh9gJ7ALB5H77h0bEAE3hhDH96N5enWgWVNPIOBxkf3qJo4GHj1BIsoLfFGjqRp1Voe_1r4vLYeVEVfKfeaNhXFwEBzZlHB295Itk3XUBcZ7RQq_yyzUeStzBmw51IsIl_vI8DKiiXpbFwl0_mxYmyHHZoRZ-lJSjQyJjCngCzncFAZaLEauuuz9LywVR8T3v7eGc7ArfXi-eyZjmfOZP78zMbRCAzEahsYsJgtRZTF6l3CbzkEUm-CruKY3W3CxWvi9SoKg4Jw1LOWpQ9giAl2qbzgsGs1LWtOghAaGx-SI96Je_630crQgu5E2K0bi7_PzsILoSEi6QyQzZDGMSW5quSVCvtdTs-qoGq8tx2RsMf5M6sXzv8Ll3XbhgZv-M7a4eBwHtb0Lp2sXEciGdL3-uoSuz50srFWwiK_B4M0NMV0vcsGCGhq6mQub088Y74"
            },
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <div className="LoginNavbar">
                <div className="backBtn float-start" >
                    <span ><Link className="backIcon" to="/admin/dashboard"><MdKeyboardBackspace /></Link></span>
                </div>
                <h5>United Dorms</h5>

                <div className="logoutButton">
                    <img src={logout} alt="" />
                </div>
            </div>


            <div className="addBlogMain">
                <div className="container">
                    <h1>Add New Blog Post</h1>
                    <form onSubmit={addBlog}>
                        <input type="text" id='dormId' onChange={handleTitle} placeholder="Add a title" />

                        <div className="input">
                            <textarea name="" id="" onChange={handleDescription} cols="30" rows="10" placeholder="Enter Dorm Detail"></textarea>
                        </div>

                        <div className="input inputFile">
                            <input type="file" onChange={handleImage} className="hiddenInput" />
                            <div className="overflowText">
                                <p>Add Image Or Video</p>

                                <img className="placeholderImage" src={image} alt="" />

                            </div>
                        </div>
                        <div className="input">
                            <button className='addDorm' type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddBlog