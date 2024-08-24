import React from 'react'
import './CallImage.css'
import ImageSetting from '../../component/GroupofImg/ImageSetting'
import spacingTech from '../../assests/images/spacingtech.png'
import spacing from '../../assests/images/spacing.png'
import speechteck from '../../assests/images/speechTeck.png'
import tech from '../../assests/images/tech.png'
import electronic from '../../assests/images/electronic.png'

export default function CallImages() {
    const data = [{
        images: spacingTech,
    },
    {
        images: spacing,
    },
    {
        images:speechteck,
    },
    {
        images: tech,
    },
    {
        images: electronic,
    },
    ]
    return (
        <>
            <div className="main_images">
                <div className="Setting_images">
                    {
                        data.map((item, index) => (
                            <ImageSetting
                                key={index}
                                images={item.images}

                            />


                        ))
                    }

                </div>
            </div>
        </>
    )
}
