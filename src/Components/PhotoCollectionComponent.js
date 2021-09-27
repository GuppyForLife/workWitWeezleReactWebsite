import React from "react";

const PhotoCollection = (props) => {

    return(
        <>
            <div className='container mt-5'>
                <h2 className='font-weight-bold'>{props.photo.title}</h2>
                <p>{props.photo.description}</p>
            </div>
            <div className='container-fluid'>
                <img className='img-fluid mt-5' src={props.photo.images[0]}/>
                <img className='img-fluid mt-5' src={props.photo.images[1]}/>
                <img className='img-fluid mt-5' src={props.photo.images[2]}/>
                <img className='img-fluid mt-5' src={props.photo.images[3]}/>
                <img className='img-fluid mt-5' src={props.photo.images[4]}/>
                <img className='img-fluid mb-5 mt-5' src={props.photo.images[5]}/>
            </div>
        </>
    );
}

export default PhotoCollection;