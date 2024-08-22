import React from 'react'
import Laptop from '../../assests/images/saleuplaptop.png'
import Button from '../button/Button'
import './SaleUp.css'

export default function SaleUp() {
    return (
        <>
            <div className="saleup  flex   " >
                <div className="laptopImg    overflow-hidden  ">
                    <img src={Laptop} alt="" />
                </div>
                <div className="saleUpInfo flex flex-col   justify-start absolute" >
                    <div className="salenewButton flex flex-col">

                        <Button
                            title="New Laptops"
                            style={{ width: "134px", height: "45px", borderRadius: "20px", border: "1px solid #1b5a7d", }}
                            className="saleButton w-full   " />

                    </div>
                    <div className="saleupinfo">
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
