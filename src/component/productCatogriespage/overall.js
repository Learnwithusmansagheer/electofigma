import React from 'react'
import Callcatogriesproduct from './Callcatogriesproduct'
import Hr from '../hrtag/Hr'
import { BiColor } from 'react-icons/bi'
const items =[{
    heading:'Catogries',
    styles:{
      color:'rgba(0, 63, 98, 1)',
      fontSize:'16px',
      fontWeight:'500'
    }
}]
export default function Overall() {
  return (
    <>
    
    <div>
    {
        items.map((item,index)=>(
          <Callcatogriesproduct
          key={index}
          heading={item.heading}
          styles={item.styles}

          />
        ))
      }
      
    </div>
    <Hr/>

    </>
  )
}