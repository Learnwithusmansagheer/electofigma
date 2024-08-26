import React from 'react'
import './Produced.css'
import Button from '../button/Button'
export default function Produced({ images,heading,paragraph,para }) {
    return (
        <>
            <div className="Setting_producedCard">
                <a href="#" className="product_card flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl" >
                    <img className="object-cover " src={images} alt="" style={{width:'318px',height:'288px'}}/>
                    <div className="producedInformation ">
                        <div className="button">
                            <Button
                                title="22,oct,2021"
                                style={{ width: "150px", height: "51px", borderRadius: "35px", border: "1px solid #1b5a7d", color: "#1b5a7d" }}
                                className="productBtn1"
                            />
                        </div>
                        <div className="information_setting">
                            <h5 className=" ">{heading}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{paragraph}</p>
                        </div>
                        <p style={{color:'rgba(27, 90, 125, 1)'}}>{para}</p>
                    </div>
                </a>
            </div>

        </>
    )
}
