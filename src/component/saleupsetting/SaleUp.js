import React from 'react'
import Laptop from '../../assests/images/saleuplaptop.png'
import Button from '../button/Button'
import './SaleUp.css'

export default function SaleUp() {
    return (
        <>
            <div className="saleup  flex justify-evenly  " style={{ borderRadius: '20px', overflow: 'hidden', height: '400px', margin: '40px', background: 'rgb(27, 27, 27)' }}>
                <div className="laptopImg  w-1/2 h-full overflow-hidden  ">
                    <img src={Laptop} alt="" style={{ height: '700px', width: '1000px',marginLeft:'px', marginTop: '-170px', zIndex: '0' }} />
                </div>
                <div className="saleUpInfo flex flex-col  bg-white justify-start absolute" >
                    <div className="salenewButton flex flex-col">

                        <Button
                            title="New Laptops"
                            style={{ width: "134px", height: "45px", borderRadius: "20px", border: "1px solid #1b5a7d", }}
                            className="saleButton w-full   " />

                    </div>
                    <div className="saleupinfo flex flex-col gap-3">
                        <h1 className='sale ' style={{ fontSize: '41px', fontWeight: '700', color: 'rgba(46, 143, 197, 1)' }}>Sale up to 50% off</h1>
                        <p className=' '>12 inch hd display</p>
                    </div>
                    <div className="shopupButton">
                    <Button
                            title="Shop Now"
                            style={{ width: "134px", height: "45px", borderRadius: "20px", border: "1px solid #1b5a7d", }}
                            className="saleButton w-full   " />
                    </div>
                </div>
            </div>
        </>
    )
}
