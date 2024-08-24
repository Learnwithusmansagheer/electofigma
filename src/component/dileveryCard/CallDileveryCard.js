import React from 'react'
import DileveryCard from './DileveryCard'
import Freeimg from '../../assests/images/free.png'
import Crown from '../../assests/images/crown.png'
import Warenty from  '../../assests/images/warenty.png'
import './CallDilevery.css'
export default function CallDileveryCard() {
    const information = [{
        images: Freeimg,
        heading: 'Free delivery',
        paragaph: 'on order above $50,00'

    },
    {
        images: Crown,
        heading: 'Best quality',
        paragaph: 'best quality in low price'

    },
    {
        images: Warenty,
        heading: '1 year warranty',
        paragaph: 'Avaliable warranty'

    }
]
    return (
        <>
        <div className="mainsetting">
            <div className="setDileveryCard">
                {
                    information.map((item, index) => (
                        <DileveryCard
                            images={item.images}
                            heading={item.heading}
                            paragraph={item.paragaph}
                        />
                    ))
                }

            </div>
            </div>
        </>
    )
}
