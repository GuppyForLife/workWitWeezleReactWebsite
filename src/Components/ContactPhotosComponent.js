import { React, useState } from "react";
import { PHOTOS } from "../shared/photos";

const Photos = () => {

    const [photos] = useState(PHOTOS)

    return (
        <div className='container-fluid mb-5' >

            <div className='row'>
                <div className='col'>
                <img className='img-fluid' src={photos[4].image}></img>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col'>
                    <img className='img-fluid' src={photos[0].image}></img>
                </div>
                <div className='col'>
                    <img className='img-fluid' src={photos[6].image}></img>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col'>
                    <img className='img-fluid' src={photos[1].image}></img>
                </div>
                <div className='col'>
                    <img className='img-fluid' src={photos[5].image}></img>
                </div>
            </div>
            
        </div>
    );
}

export default Photos;