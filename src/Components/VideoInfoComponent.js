import React from "react";

const VideoInfo = (props) => {
    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    <h1 className='font-weight-bold'>{props.video.title} - {props.video.artist}</h1><br/>
                    <p>{props.video.description}</p><br/>
                    <div className='embed-responsive embed-responsive-16by9'>
                        <iframe src={props.video.source} allowFullScreen />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoInfo;