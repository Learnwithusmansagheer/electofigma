import React from 'react'
import LoremCardset from '../../component/LoremCard/LoremCardset'
import firstimg from '../../assests/images/Savannah.png'
import Secondimg from '../../assests/images/Esther.png'
import thirdimg from '../../assests/images/Howard.png'
import './CallLorem.css'
export default function CallLoremCard() {
    const information = [{
        images: firstimg,
        heading: 'Savannah Nguyen',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.'


    },
    {
        images: Secondimg,
        heading: 'Esther Howard',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.'


    },
    {
        images: thirdimg,
        heading: 'Savannah Nguyen',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.'


    }
    ]
    return (
        <>
            <div className="mainlorem">
                <div className="loremCardSetting">
                    {
                        information.map((item, index) => (
                            <LoremCardset
                                key={index}
                                images={item.images}
                                heading={item.heading}
                                paragraph={item.paragraph}
                            />
                        ))
                    }
                </div>
            </div>
        </>

    )
}
