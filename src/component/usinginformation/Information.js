import React from 'react'
import { PiGreaterThanBold } from "react-icons/pi";
export default function Information() {
  return (
    <div>
         <div className="information flex gap-7 px-  py-5 ml-2 lg:ml-8" style={{width:'100%'}}>
    <div className="home-heading flex justify-start items-center gap-4 w-28 cursor-pointer">
        <h1>Home</h1>
        <PiGreaterThanBold />

    </div>
    <div className="catogries_set flex justify-start items-center gap-4 w-48 cursor-pointer">
        <h1>All category</h1>
        <PiGreaterThanBold />
    </div>
  </div>
      
    </div>
  )
}
