import React from 'react'
import './Navbar.css'
import images1 from '../../assests/images/electonlogo.png'
import { LuUser2 } from "react-icons/lu";

export default function Navbar() {
    return (
        <>
            <header className="header">
                <nav>
                    <div className="logo">
                        <div className="imagelog">
                            <img style={{ width: '140px', height: '39px', cursor: 'pointer' }} src={images1} alt="" />
                        </div>
                        <div className="inputsetting">
                            <input placeholder="Search any thing" className="input" name="email" type="email" />
                            <button style={{ width: '130px' }} className="button">Search</button>
                        </div>

                    </div>
                    <input type="checkbox" id="menu-toggle" />
                    <label for="menu-toggle" className="menu-icon">&#9776;</label>
                    <div className="signSetting">
                        <div className="userSignIn flex flex-row  justify-center  gap-4 items-center">
                            < LuUser2 style={{ color: 'white', width: '30px', height: '30px', }} />
                            <h4 className='heading text-sm text-white'>Sign In</h4>
                        </div>
                    </div>
                 
                </nav>
            </header>
        </>
    )
}
