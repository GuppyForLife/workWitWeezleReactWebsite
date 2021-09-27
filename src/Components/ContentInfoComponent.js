import React from "react";

const ContentInfo = (props) => {

    return(
        <div className='container mt-5'>
                <div className='row'>
                    <div className='col'>
                        <div className='embed-responsive embed-responsive-16by9'>
                            <iframe src={props.contentVideo.source} allowFullScreen />
                        </div>
                        <br />
                        <h3 className='font-weight-bold'>'{props.contentVideo.title}'</h3><br/>
                        <h5>
                        {props.contentVideo.artist}</h5>
                    </div>
                </div>
            </div>
    )
}

export default ContentInfo;