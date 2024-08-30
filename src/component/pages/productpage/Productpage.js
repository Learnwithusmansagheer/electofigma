import React from 'react'
import Navbar from '../../Header/Navbar'
import Catogries from '../../catogries/Catogries'
import './productpage.css'
import Information from '../../usinginformation/Information'
export default function Productpage() {
  return (
  <>
  <div className="product-page">
<Navbar/>
  </div>
  <div className="catagroies">
    <Catogries/>
  </div>
 <div className="informationSetting">
    <Information/>
 </div>
  </>
  )
}
