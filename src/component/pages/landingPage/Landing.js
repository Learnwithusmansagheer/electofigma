import React from 'react'
import Navbar from '../../Header/Navbar'
import Catogries from '../../catogries/Catogries'
import Camera from '../../canoncamera/Camera'
import CallCard from '../../firstCard/CallCard'
import Products from '../../poppularProducts/Products'
import CallPopularCard from '../../poppularCard/CallPopularCard'
import SaleUp from '../../saleupsetting/SaleUp'
export default function Landing() {
  return (
  <>
  <div className="navbar">
  <Navbar/>
  </div>
  <div className="catogries" style={{marginTop:'95px'}}> <Catogries/></div>
  <div className="camera">
  <Camera/>
  </div>
 <div className="call">
 <CallCard/>
 </div>
 <div className="setProdicts" style={{marginTop:'40px'}}>
    <Products/>
 </div>
 <div className="Callproductcard" style={{marginTop:'50px'}}>
<CallPopularCard/>
 </div>
 <div className="saleupSetting">
 <SaleUp />
 </div>



  </>
  )
}

