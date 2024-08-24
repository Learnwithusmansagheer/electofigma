import React from 'react'
import './DeepBase.css'
import Rating from '../ratingstar/Rating'
import DeepBaseImg from '../../assests/images/deepbase.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import CallGameCard from '../playgameCard/CallGameCard';

export default function DeepBase() {
    return (
        <>
            <div className="deepCardSetting  ">


                <div className="deepbaseCard">
                    <div className="deepimg">
                        <img src={DeepBaseImg} alt="" />
                    </div>
                    <div className="deepInfo flex flex-col gap-5">
                        <div className="deepBaseheading flex flex-col items-start  gap-16 ">
                            <h1>JBL bar 2.1 deep bass</h1>
                            <p>$11,70</p>
                            <Rating />
                        </div>
                        <div className="numberinfo flex  gap-3">
                            <div className="first  w-16 h-16 rounded-full justify-center flex items-center  " >
                                <p>57</p>
                            </div>
                            <div className="first  w-16 h-16 rounded-full justify-center flex items-center" >
                                <p>11</p>
                            </div>
                            <div className="first  w-16 h-16 rounded-full justify-center flex items-center" >
                                <p>33</p>
                            </div>
                            <div className="first  w-16 h-16 rounded-full justify-center flex items-center" >
                                <p>59</p>
                            </div>

                        </div>
                        <div className="setbutton flex gap-4">
                            <button className='add w-48 px-2'>
                                <span className='p  flex flex-wrap  text-white ' style={{ display: 'flex', flexWrap: 'nowrap', fontSize: '13px', padding: '15px', zIndex: '1' }}>Add to Cart</span>
                                <AiOutlineShoppingCart className='card w-5 bg-amber-400 h-5 rounded-full text-white' style={{ fontSize: '10px' }} />
                            </button>
                            <button className='see w-16 '>
                                <span> <IoEyeOutline /></span>

                            </button>
                        </div>
                    </div>
                </div>
                <div className="playgame">
                    <CallGameCard />
                </div>
            </div>
        </>
    )
}
