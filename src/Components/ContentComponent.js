import React, { useState } from "react";
import { CONTENTVIDEOS } from '../shared/contentVideos';
import { Link } from "react-router-dom";

const RenderContentItem = ({contentVideo}) => {
    return (
        <Link className='dark-link' to={`/content/${contentVideo.id}`}>
            <div className='hover hover-2 text-black'>
                <img className='img-fluid' src={contentVideo.thumbnail} />
                    <p className='hover-2-description text-uppercase'>"{contentVideo.title}"<br />{contentVideo.artist}</p>
            </div>
        </Link>
    )
}

const Content = () => {

    const [contentVideos] = useState(CONTENTVIDEOS);

    return(
        <>
            <div className='container mt-5 mb-5'>
                <h3 className='font-weight-bold'>Content</h3>
                <br/>
                <h4>
                I live on YouTube.<br/> Naturally, I’ve gravitated towards that space since I’m forever glued to the many channels that I’ve subscribed to over the years. <br/>The ability to edit videos to captivate your audience and engage throughout the “view” is a neccessity as we move towards a new on-demand culture, where TV is YouTube now.
                </h4>
            </div>
            <div className='image-rules'>
                <div className='row'>
                    <div className='col-md-6'>
                        <RenderContentItem contentVideo={contentVideos[0]} />
                    </div>
                    <div className='col'>
                        <RenderContentItem contentVideo={contentVideos[3]} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <RenderContentItem contentVideo={contentVideos[2]} />
                    </div>
                    <div className='col'>
                        <RenderContentItem contentVideo={contentVideos[1]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;