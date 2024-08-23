import React from 'react'
import './CallGameCard.css'
import gameCardimg from '../../assests/images/gamecontrol.png'
import  GameCard from '../../component/playgameCard/PlayGameCard'
import Disktopimg from '../../assests/images/disktop.png'
export default function CallGameCard() {
    const info=[{
        image:gameCardimg,
        heading:'Play game',
        price:'$11,70',
        size:{width:'240px',height:'168px'}
    },
    {
        image:Disktopimg,
        heading:'Disktop',
        price:'$11,70',
        size:{width:'240px',height:'168px'}
    }
]
    
  return (
  <>
  <div className="settingCallGameCard ">
  {
    info.map((item,index)=>(
        <GameCard
        key={index}
        image={item.image}
        heading={item.heading}
        price={item.price}
        size={item.size}
        />
    ))
}
  </div>
 
  </>
  )
}

