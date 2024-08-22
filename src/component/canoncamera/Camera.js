import React from 'react'
import Button from '../button/Button'
import './CameraStyle.css'
import { hover } from '@testing-library/user-event/dist/hover'
import CanonCamera from '../../assests/images/canonCamera.png'

export default function camera() {


    return (
        <>
            <div className="camera h-auto  flex p-24  items-center gap-96">
                <div className="cameraText flex flex-col gap-11 w-1/2 ">
                    <div className="headingCamera  h-36 flex ">
                        <h1 style={{ fontSize: '43px', color: "#1b5a7d" }} className='text size-8 font-bold '>Canon Camera</h1>
                    </div>
                    <div className="buttonsetting flex flex-col md:flex-row gap-5 md:gap-5 w-full md:w-auto">
                        <Button
                            title="Shop now"
                            style={{ width: "150px", height: "61px", borderRadius: "20px" }}
                            className="landing_button w-full md:w-[150px]"
                        />
                        <Button
                            title="View more"
                            style={{ width: "150px", height: "61px", borderRadius: "20px", border: "1px solid #1b5a7d", color: "#1b5a7d" }}
                            className="landing_button1 w-full md:w-[150px]"
                        />
                    </div>



                </div>
                
                <div className="cameraimg flex ">

                    <img src={CanonCamera} alt="" style={{ width: '331px', height: '356px' }} />
                    <div className="token ">
                        <p className='para text-white'>only <br /> $89</p>
                    </div>
                </div>
            </div>
        </>
    )
}
