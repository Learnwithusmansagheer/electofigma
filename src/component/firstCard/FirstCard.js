import React from 'react'
import './FirstCard.css'
export default function FirstCard({ URLImg, heading,paragraph}) {
    return (
        <div>
            <div className="Cardset ">
                <div className="cardimg" style={{width:'auto', margin:'0 10px'}}>
                    <img className='img ' src={URLImg} alt="" />
                </div>
                <div className="speaker" >
                    <h1 className='font'>{heading}</h1>
                    <p>{paragraph}</p>
                </div>
            </div>
        </div>
    )
}
