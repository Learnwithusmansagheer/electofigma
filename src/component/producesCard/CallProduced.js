import React from 'react'
import './CallProduced.css'
import Produced from '../../component/producesCard/Produced'
import Images1 from '../../assests/images/images1.png'
import Images2 from '../../assests/images/images2.png'
export default function CallProduced() {
    const information = [{
        images: Images1,
        heading: 'Who avoids a pain that produces?',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
        para: 'By spacing tech'

    },
    {
        images: Images2,
        heading: 'Who avoids a pain that produces?',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
        para: 'By spacing tech'

    }
    ]
    return (
        <>
            <div className="main_settingCall">
                <div className="Call_setting">
                    {
                        information.map((item, index) => (
                            <Produced
                                key={index}
                                images={item.images}
                                heading={item.heading}
                                paragraph={item.paragraph}
                                para={item.para}

                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
