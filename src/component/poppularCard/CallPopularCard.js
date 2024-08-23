import React from 'react'
import './CallPopularCard.css'
import PoppularCard from './PoppularCard'
import headphoneImg from '../../assests/images/headphone.png'
import Gamecontrol from '../../assests/images/gamecontrol.png'
import Camera from '../../assests/images/camera 1.png'
import Disktop from '../../assests/images/disktop.png'
import GameCard from '../../component/playgameCard/PlayGameCard'
export default function CallPopularCard() {
    const details =[{
        image:Camera,
        heading:'Wireless Camera',
        price:'$11,70',
        size:{width:'187px',height:'150px'}

    },
    {
        image: Gamecontrol,
        heading:'Play game',
        price:'$11,70',
        size:{width:'187px',height:'150px'}
    },
    {
        image:Disktop,
        heading:'Tablet as a laptop',
        price:'$11,70',
        size:{width:'268px',height:'150px'}

    },
    {
        image:headphoneImg,
        heading:'Wireless headphones',
        price:'$11,70',
        size:{width:'268px',height:'150px'}
    },
   
    {
        image: Gamecontrol,
        heading:'Wireless headphones',
        price:'$11,70',
        size:{width:'187px',height:'150px'}
    },
    {
        image:headphoneImg,
        heading:'Wireless headphones',
        price:'$11,70',
        size:{width:'268px',height:'150px'}
    },
    {
        image:Disktop,
        heading:'Wireless headphones',
        price:'$11,70',
        size:{width:'268px',height:'150px'}

    },
    {
        image:Camera,
        heading:'Wireless headphones',
        price:'$11,70',
        size:{width:'187px',height:'150px'}

    },

 
]

  return (
    <>
    <div className="setCard ">
    {
    details.map((item,index)=>(
        <PoppularCard
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
