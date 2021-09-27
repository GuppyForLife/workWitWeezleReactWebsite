import React, { useState } from "react";
import { BEHIND } from "../shared/bts";
import { Link } from "react-router-dom";

const RenderPhotoItem = ({photo}) => {

    return (
        <Link className='dark-link' to={`/photos/${photo.id}`}>
            <div className='hover hover-2 text-black'>
                <img className='img-fluid' src={photo.images[0]} />
                    <p className='hover-2-description text-uppercase'>"{photo.title}"</p>
            </div>
        </Link>
    )
}

const MainPhotosPage = () => {

    const [btsPhotos] = useState(BEHIND)

    return(
        <>
            <div className='container'>
                <h2 className='mt-5 mb-5'>A collection of BTS and random photos I’ve taken on sets and projects so far.</h2>
                <br/>
            </div>
            <div className='container-fluid'>
            <div className='row mt-5'>
                    <div className='col-md'>
                        <RenderPhotoItem photo={btsPhotos[0]} />
                    </div>
                    <div className='col'>
                        <RenderPhotoItem photo={btsPhotos[1]} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md'>
                        <RenderPhotoItem photo={btsPhotos[2]} />
                    </div>
                    <div className='col'>
                        <RenderPhotoItem photo={btsPhotos[3]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPhotosPage