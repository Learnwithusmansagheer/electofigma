import React from 'react'

import ProductCatogries from '../productCatogriespage/ProductCatogries'
import Hr from '../hrtag/Hr'
import './avialability.css'

export default function Avialability(props) {

  const items =[{
    heading:'0 selected',
    paragraph:'lasdkfj'
}]
  return (
    <>
    <div className="mainavail  ">

   
      <div className="heading ml-8 mt-3">
            <h1>{props.props.heading}</h1>
        </div>
    <div className=' avil mt-3 ' >
      {
        items.map((item,index)=>(
          <ProductCatogries
          key={index}
          heading={item.heading}
          paragraph={item.paragraph}

          />
        ))
      }
      
    
      
    </div>
    </div>
    <Hr/>
  
    </>
  )
}
