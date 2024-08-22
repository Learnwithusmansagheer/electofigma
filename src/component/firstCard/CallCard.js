import React from 'react'
import FirstCard from './FirstCard'
import SpeakerImg from '../../assests/images/speaker.png'
import Disktop from '../../assests/images/disktop.png'
import DSLRcamera from '../../assests/images/DSLR camera.png'
import './CallCard.css'

export default function CallCard() {
    const information =[
        {
            URLImg:SpeakerImg,
            heading:'speaker',
            paragraph:'(6 itmes)',
       
        },
        {
            URLImg:Disktop,
            heading:'Desktop & laptop',
             paragraph:'(6 itmes)'
        },
        {
            URLImg:DSLRcamera,
            heading:'DSLR camera',
            paragraph:'(6 itmes)',
        }, 
        
    ]
  return (
    <>
    <div className="container overflow-x-hidden  py-11">

    
    <div  className='settingCard'>
      {
        information.map((item,index)=>(
            <FirstCard
            key={index}
            URLImg={item.URLImg}
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
