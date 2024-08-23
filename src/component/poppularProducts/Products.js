import React from 'react'
import Button from '../button/Button'
import './Products.css'
export default function Products() {
    return (
        <>
            <div className="popularProduct flex justify-between  items-center px-20 ">
                <div className="heading">

                    <h1 className='size' style={{fontSize:'27px',fontWeight:'700', color:'rgba(27, 90, 125, 1)'}}>Poppular Products</h1>
                </div>
                <div className="productButton flex gap-4">
                <Button
                            title="Cameras"
                            style={{ width: "150px", height: "61px", borderRadius: "20px", border: "1px solid #1b5a7d", color: "#1b5a7d" }}
                            className="productBtn1 w-full md:w-[150px]  "
                        />
                      <Button
                            title="Laptops"
                            style={{ width: "150px", height: "61px", borderRadius: "20px", border: "1px solid #1b5a7d", color: "#1b5a7d" }}
                            className="productBtn1 w-full md:w-[150px]"
                        />
                         <Button
                            title="Tablets"
                            style={{ width: "150px", height: "61px", borderRadius: "20px", border: "1px solid #1b5a7d", color: "#1b5a7d" }}
                            className="productBtn1 w-full md:w-[150px]"
                        />
                         <Button
                            title="Mouse"
                            style={{ width: "150px", height: "61px", borderRadius: "20px", border: "1px solid #1b5a7d", color: "#1b5a7d" }}
                            className="productBtn1 w-full md:w-[150px]"
                        />
                </div>
            </div>
        </>
    )
}
