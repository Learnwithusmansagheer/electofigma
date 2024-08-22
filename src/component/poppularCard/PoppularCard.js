import React from 'react'
import './PoppularCard.css'
export default function PoppularCard({ image,heading,price,size}) {
    return (
        <>
            <div className="poppularCardSet  ">
                <div className="headPhone flex  p-6">
                    <div className="img ">
                        <img className='img ' src={image} alt="" style={size} />
                    </div>
                    <div className="like absolute flex justify-end items-end " style={{margin:'20px 210px'}}>
                        <label className="ui-like">
                            <input type="checkbox" />
                            <div className="like">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
                                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                                    <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
                                    </g>
                                </svg>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="productInfo flex flex-col px-4 justify-start items-start gap-1 ">
                    <div className="heading" style={{color:'rgb(61, 127, 175)'}}>
                        <h2>{heading}</h2>
                    </div>
                    <div className="paragraph">
                        <p>{price}</p>
                    </div>
                    <div className="rating ">

                        <input value="5" name="rating" id="star5" type="radio" />
                        <label for="star5"></label>
                        <input value="4" name="rating" id="star4" type="radio" />
                        <label for="star4"></label>
                        <input value="3" name="rating" id="star3" type="radio" />
                        <label for="star3"></label>
                        <input value="2" name="rating" id="star2" type="radio" />
                        <label for="star2"></label>
                        <input value="1" name="rating" id="star1" type="radio" />
                        <label for="star1"></label>

                    </div>

                </div>

            </div>

        </>
    )
}
