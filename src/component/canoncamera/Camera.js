import React from 'react'
import Button from '../button/Button'
import './CameraStyle.css'
import { hover } from '@testing-library/user-event/dist/hover'
import CanonCamera from '../../assests/images/canonCamera.png'

export default function camera() {


    return (
        <>
            <div className="camera">
                <div className="cameraText ">
                    <div className="headingCamera   ">
                        <h1 style={{ }} className='text font-bold '>Canon Camera</h1>
                    </div>
                    <div className="buttonsetting flex flex-col md:flex-row gap-5 md:gap-5 w-full md:w-auto">
                        <Button
                            title="Shop now"
                            style={{}}
                            className="landing_button "
                        />
                        <Button
                            title="View more"
                            style={{ }}
                            className="landing_button1  "
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
