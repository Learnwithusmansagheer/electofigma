import React from 'react'
import './subscribe.css'
import { PiHeadphonesLight } from "react-icons/pi";
import { FiSend } from "react-icons/fi";
export default function Subscribe() {
  return (
   <>
   <div className="subcrieSetting">
    <div classNameName="SubscribeHeading">
        <h1 className='headingStyle' style={{}}>Subscribe newsletter</h1>
    </div>
    <div className="subcribe_input relative">
<input type="email" name="email" id="email"  placeholder='Email address' className='emailinput '/>
<FiSend className='sendIcon' />
    </div>
    <div classNameName="contactUs flex "style={{display:'flex',alignItems:'center',gap:'15px'}}>
        <div classNameName="contactimg  " >
        <PiHeadphonesLight className='icon size-10 text-orange-400' />
      
        </div>
        <div classNameName="contact_information">
          <p>Call us 24/7 : <br /> (+62) 0123 567 789</p>
        </div>
    </div>
   </div>
   </>
  )
}
