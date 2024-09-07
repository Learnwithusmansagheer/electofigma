import React from 'react'
import Navbar from '../../Header/Navbar'
import Catogries from '../../catogries/Catogries'
import './productpage.css'
import Information from '../../usinginformation/Information'
import Callcatogriesproduct from '../../productCatogriespage/Callcatogriesproduct'
import PoppularCard from '../../poppularCard/PoppularCard'
import headphone from '../../../assests/images/headphone.png'
import Disktop from '../../../assests/images/disktop.png'
import Camera from '../../../assests/images/camera 1.png'
export default function Productpage() {
  const details =[{
    image:Camera,
    heading:'Wireless Camera',
    price:'$11,70',
    size:{width:'187px',height:'150px'}

},
{
  image:Disktop,
  heading:'Wireless Camera',
  price:'$11,70',
  size:{width:'200px',height:'150px'}

},
{
  image:headphone,
  heading:'Wireless Camera',
  price:'$11,70',
  size:{width:'200px',height:'150px'}

},
{
  image:Camera,
  heading:'Wireless Camera',
  price:'$11,70',
  size:{width:'187px',height:'150px'}

},
{
image:Disktop,
heading:'Wireless Camera',
price:'$11,70',
size:{width:'200px',height:'150px'}

},
{
image:headphone,
heading:'Wireless Camera',
price:'$11,70',
size:{width:'200px',height:'150px'}

},
{
  image:Camera,
  heading:'Wireless Camera',
  price:'$11,70',
  size:{width:'187px',height:'150px'}

},
{
image:Disktop,
heading:'Wireless Camera',
price:'$11,70',
size:{width:'200px',height:'150px'}

},
{
image:headphone,
heading:'Wireless Camera',
price:'$11,70',
size:{width:'230px',height:'150px'}

},
{
  image:Camera,
  heading:'Wireless Camera',
  price:'$11,70',
  size:{width:'187px',height:'150px'}

},
{
image:Disktop,
heading:'Wireless Camera',
price:'$11,70',
size:{width:'200px',height:'150px'}

},
{
image:headphone,
heading:'Wireless Camera',
price:'$11,70',
size:{width:'230px',height:'150px'}

},
]
  return (
  <>
  <div className="product-page ">
<Navbar/>
  </div>
  <div className="catagroies overflow-hidden">
    <Catogries/>
  </div>
 <div className="informationSetting  overflow-hidden">
    <Information/>
 </div>
 <div className="information_update ">
  <div className="jjj">
  <Callcatogriesproduct />
  </div>
  
<div className="iii flex gap-8 flex-wrap">

    {
      details.map((item,index)=>(
          <PoppularCard
          key={index}
          image={item.image}
          heading={item.heading}
          price={item.price}
          size={item.size}
          />
      ))
  }
</div>

 
 </div>
  </>
  )
}
