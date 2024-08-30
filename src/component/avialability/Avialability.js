import React from 'react'

import ProductCatogries from '../productCatogriespage/ProductCatogries'
import Hr from '../hrtag/Hr'
import './avialability.css'
import Callcatogriesproduct from '../productCatogriespage/Callcatogriesproduct'

export default function Avialability(props) {

  const items =[{
    heading:'0 selected',
 
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
          <Callcatogriesproduct
          key={index}
          heading={item.heading}
   

          />
        ))
      }
      
    
      
    </div>
    </div>
    <Hr/>
  
    </>
  )
}
