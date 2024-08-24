import React from 'react'
import './Dilevery.css'
export default function DileveryCard({images,heading,paragraph}) {
    return (
        <>
            <div className="dileveryCard">
                <div className="imgpart">
                <img className='img w-16 h-16' src={images} alt="" />

                </div>
                <div className="information">
                    <h1>{heading}</h1>
                    <p>
                        {paragraph}
                    </p>
                </div>
               
            </div>
        </>
    )
}
