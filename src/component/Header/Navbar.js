import React from 'react'
import './Navbar.css'
import images1 from '../../assests/images/electonlogo.png'
import { LuUser2 } from "react-icons/lu";
import { FaCreativeCommonsZero } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";
import Button from '../button/Button';
// import { styles } from './styles';



export default function Navbar() {
    return (
        <>
            <header className="header ">
                <nav>
                    <div className="logo">
                        <div className="imagelog">
                            <img  style={{ }} src={images1} alt="" />
                        </div>
                        <div className="inputsetting ">
                            <input placeholder="Search any thing" className="input" name="" type="search" />
                            <Button title='Search' style={{ width: "150px", height: "55px", borderRadius: "10px",background:'rgb(243, 114, 25)',color:'white',marginRight:'-10px' }} className='landing_button' />
                           
                        </div>

                    </div>
                    <input type="checkbox" id="menu-toggle" />
                    <label for="menu-toggle" className="menu-icon">&#9776;</label>
                    <div className="signSetting flex justify-center items-center gap-7">
                        <div className="userSignIn flex flex-row  justify-center  gap-4 items-center">
                            < LuUser2 style={{ color: 'white', width: '30px', height: '30px', }} />
                            <h4 className='heading text-sm text-white cursor-pointer max-[620px]:hidden'>Sign In</h4>

                        </div>
                        <div className="like flex justify-center items-center gap-2" >
                            <div className="raiting flex flex-row justify-center items-center gap-2">

                                <div class="heart-container" title="Like">
                                    <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
                                    <div className="svg-container">
                                        <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                            </path>
                                        </svg>
                                        <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                            </path>
                                        </svg>
                                        <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                            <polygon points="10,10 20,20"></polygon>
                                            <polygon points="10,50 20,50"></polygon>
                                            <polygon points="20,80 30,70"></polygon>
                                            <polygon points="90,10 80,20"></polygon>
                                            <polygon points="90,50 80,50"></polygon>
                                            <polygon points="80,80 70,70"></polygon>
                                        </svg>
                                    </div>
                                </div>
                                <div className="notification justify-center items-center">
                                    <FaCreativeCommonsZero className='set rounded-full text-orange-400 w-4 h-4' />
                                    {/* <h1 className='noti bg-orange-300 text-white rounded-full w-4 justify-center items-center'>0</h1> */}
                                </div>
                            </div>
                            <h4 className='heading text-sm text-white cursor-pointer max-[620px]:hidden'>Sign In</h4>
                        </div>
                        <div className="shopingCart flex gap-2 "  >
                        <RiShoppingCart2Line className='shopingcart text-white w-4 h-4' />
                        <FaCreativeCommonsZero className='set rounded-full text-orange-400 w-4 h-4' />
                        </div>
                        <h4 className='heading text-sm text-white cursor-pointer max-[620px]:hidden'>Cart</h4>
                    </div>

                </nav>
            </header>
        </>
    )
}
