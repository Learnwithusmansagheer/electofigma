import React from 'react'
import './LoremCard.css'
export default function LoremCardset({ images,heading,paragraph}) {
    return (
        <>
            <div className="loremCard">
                <div className="informationSetting">
                    <div className="loremImg"><img src={images} alt="" /></div>
                    <div className="namelorem"><h1>{heading}</h1></div>
                </div>
                <div className="paragraphLorem">
                    <p>{paragraph}</p>
                </div>
            </div>
        </>
    )
}
