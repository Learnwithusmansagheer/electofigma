import React from 'react'
import './Catogries.css'

export default function Catogries() {
  return (
    <>
      <div className="CatogriesNavbar  ">
        <div className="dropdown w-full bg-rgba(244, 244, 244, 1)  ">
          <select name="dropdown" id="selet" className='dropdown bg-orange-500 w-56 h-16 px-4 text-lg text-white transition-all duration-700 ease-in hover: translate-x-3  '>
            <option className='option bg-black text-white size-40' value="1">Browse categories</option>
            <option className='option text-white size-40' value="1">Browse categories</option>
            <option className='option text-white size-40' value="1">Browse categories</option>
          </select>
        </div>
        <div className="list flex items-center   gap-x-80 justify-center ">
          <div className="listSetting flex px-20 gap-7 justify-center items-center">
            <select name="" id="" className='home w-20 bg-black font-bold bg-transparent '>
              <option value="" className='font-sans'>Home</option>
            </select>
            <select name="" id="" className='home w-24 font-bold font-sans bg-transparent'>
              <option value="" className='home font-sans font-bold'>Catalog</option>
            </select>
            <p className='blog font-sans font-bold'>Blog</p>
            <select name="" id="" className='home w-20 font-bold bg-transparent'>
              <option value="" className='pages font-sans bg-black'>Pages</option>
              <option value="" className='pages font-sans'>Pages</option>
            </select>
            <p className='home w-20 font-sans font-bold'>About us</p>
          </div>
          <div className="return w-44">
            <h1 className='days font-bold '>30 Days Free Return</h1>
          </div>
        </div>
      </div>
    </>
  )
}
