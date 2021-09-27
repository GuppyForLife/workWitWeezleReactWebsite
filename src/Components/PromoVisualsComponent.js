import React, { useState } from "react";
import { PROMOVISUALS } from "../shared/promoVisuals";

const RenderCardLeftToRight = ({promo}) => {

    return(
        <div className ='row mt-5 align-items-center'>
                <div className='col-md'>
                    <div className='embed-responsive embed-responsive-16by9'>
                        <iframe src={promo.source} allowFullScreen />
                    </div>
                </div>
                <div className='col'>
                    <h2 className='font-weight-bold'>{promo.title}</h2>
                    <br/>
                    <p>{promo.description}</p>
                </div>
        </div>
    );
}

const RenderCardRightToLeft = ({promo}) => {

    return(
        <div className ='row mt-5 align-items-center'>
            <div className='col'>
                <h2 className='font-weight-bold'>{promo.title}</h2>
                <br/>
                <p>{promo.description}</p>
            </div>
            <div className='col-md order-first order-md-last'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe src={promo.source} allowFullScreen />
                </div>
            </div>
        </div>
    );
}

const PromoVisuals = () => {

    const [promoVisuals] = useState(PROMOVISUALS);

    return(
        <div className='container-fluid mb-5'>
            <RenderCardLeftToRight promo={promoVisuals[0]} />
            <RenderCardRightToLeft promo={promoVisuals[1]} />
            <RenderCardLeftToRight promo={promoVisuals[2]} />
            <RenderCardRightToLeft promo={promoVisuals[3]} />
            <RenderCardLeftToRight promo={promoVisuals[4]} />
            <RenderCardRightToLeft promo={promoVisuals[5]} />
        </div>
    )
}

export default PromoVisuals;