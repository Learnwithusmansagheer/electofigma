import React from 'react'

export default function ImageSetting({images}) {
  return (
 <>
 <div className="setting_img">
    <img className='img w-52' src={images} alt="" />
 </div>
 </>
  )
}
