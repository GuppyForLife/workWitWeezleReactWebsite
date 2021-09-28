import { React, useState } from "react";
import { VIDEOS } from "../shared/videos";
import { Link } from "react-router-dom";
import { Stagger } from 'react-animation-components';

const RenderVideoItem = ({video}) => {
    return (
        <Link className='dark-link' to={`/videos/${video.id}`}>
            <div className='hover hover-2 text-black'>
                <img className='img-fluid' src={video.image} />
                    <p className='hover-2-description text-uppercase'>"{video.title}"<br />{video.artist}</p>
            </div>
        </Link>
    )
}

const Videos = () => {
    const [videos] = useState(VIDEOS);

    return(
        <div className='image-rules'>
                <div className='row'>
                    <div className='col-md-6'>
                        <RenderVideoItem video={videos[1]} />
                    </div>
                    <div className='col'>
                        <RenderVideoItem video={videos[2]} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <RenderVideoItem video={videos[3]} />
                    </div>
                    <div className='col'>
                        <RenderVideoItem video={videos[4]} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <RenderVideoItem video={videos[5]} />
                    </div>
                    <div className='col'>
                        <RenderVideoItem video={videos[6]} />
                    </div>
                </div>
        </div>
    );

}

export default Videos;