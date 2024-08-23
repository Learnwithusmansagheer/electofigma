import React from 'react'
import './PlayGameCard.css'
import Rating from '../ratingstar/Rating'
export default function GameCard({ image, heading, price, size }) {
    return (
        <>
            <div className="playcardsetting">
                <div className="headPhone flex  p-6">
                    <div className="img ">
                        <img className='img ' src={image} alt="" style={size} />
                    </div>

                </div>
                <div className="productInfo flex flex-col px-4 justify-start items-start gap-1 ">
                    <div className="heading" style={{ color: 'rgb(61, 127, 175)' }}>
                        <h2>{heading}</h2>
                    </div>
                    <div className="paragraph">
                        <p>{price}</p>
                    </div>
                    <div className="rating ">

                        <Rating />

                    </div>

                </div>

            </div>

        </>
    )
}
