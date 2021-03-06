import React, { useState } from "react";
import { VIDEOS } from "../shared/videos";

const Home = () => {

    const [videos] = useState(VIDEOS)

    return(
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='font-weight-bold'>#WorkWitWeezle</h1><br/>
                        <h3>
                            Welcome to my site! This is a collection of all of my past, present, and future projects and serves as a centralized “portfolio” of my abilities and creativity!<br />This collection is not all, but a majority of my current work and will be the location for all future projects.<br />Follow me on Instagram @workwitweezle for more content and please use the contact page to keep in touch and inquire about my services!
                        </h3>
                    </div>
                </div>
                <br />
                <br />
            </div>
            <div className='container mb-5'>
                <h3 className='font-weight-bold'>2020 Demo Reel</h3>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe src={videos[0].source} allowFullScreen />
                </div>
            </div>
        </>
    );
}


export default Home;