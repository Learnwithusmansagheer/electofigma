import React from 'react'
import './Landing.css'
import Navbar from '../../Header/Navbar'
import Catogries from '../../catogries/Catogries'
import Camera from '../../canoncamera/Camera'
import CallCard from '../../firstCard/CallCard'
import Products from '../../poppularProducts/Products'
import CallPopularCard from '../../poppularCard/CallPopularCard'
import SaleUp from '../../saleupsetting/SaleUp'
import DeepBase from '../../deepBaseCard/DeepBase'
import CallDileveryCard from '../../dileveryCard/CallDileveryCard'
import CallLoremCard from '../../LoremCard/CallLoremCard'
export default function Landing() {
  return (
  <>
    <div className="navbar">
  <Navbar/>
  </div>
  <div className="main ">



  <div className="catogries" style={{marginTop:'95px'}}> <Catogries/></div>
  <div className="camera">
  <Camera/>
  </div>
 <div className="call ">
 <CallCard/>
 </div>
 <div className="setProdicts " style={{marginTop:'40px',}}>
    <Products/>
 </div>
 <div className="Callproductcard" style={{marginTop:'50px', width:'100%'}}>
<CallPopularCard/>
 </div>
 <div className="saleupSetting">
 <SaleUp />
 </div>
 <div className="deepbase">
 <DeepBase/>
 </div>
 <div className="calldiliveryCard">
 <CallDileveryCard />
 </div>
 <div className="LoremCard">
 <CallLoremCard/>
 </div>
 </div>



  </>
  )
}

