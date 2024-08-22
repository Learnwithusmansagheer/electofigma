import React from 'react'
import './DeepBase.css'
import Rating from '../ratingstar/Rating'
import DeepBaseImg from '../../assests/images/deepbase.png'
export default function DeepBase() {
    return (
        <>
        <div className="deepCardSetting px-8">

     
            <div className="deepbaseCard">
                <div className="deepimg">
                    <img src={DeepBaseImg} alt="" />
                </div>
                <div className="deepInfo">
                        <div className="deepBaseheading">
                            <h1>JBL bar 2.1 deep bass</h1>
                            <p>$11,70</p>
                            <Rating/>
                        </div>
                        <div className="numberinfo flex ">
                            <div className="first bg-sky-200 w-12 h-12 rounded-full justify-center flex items-center" >
                                <p>57</p>
                            </div>
                            <div className="first bg-sky-200 w-12 h-12 rounded-full justify-center flex items-center" >
                                <p>57</p>
                            </div>
                            <div className="first bg-sky-200 w-12 h-12 rounded-full justify-center flex items-center" >
                                <p>57</p>
                            </div>
                            <div className="first bg-sky-200 w-12 h-12 rounded-full justify-center flex items-center" >
                                <p>57</p>
                            </div>
                          
                        </div>
                </div>
            </div>
            </div>
        </>
    )
}
