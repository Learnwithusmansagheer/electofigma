import React from 'react';
import './productCatogries.css';

export default function ProductCatogries({ heading, data }) {
    console.log("🚀 ~ ProductCatogries ~ data:", data);

    return (
        <>
            <div>
                <div className="set_catogries">
                    {/* Render heading title and para */}
                    <div className="ss flex w-80 justify-between px-3 py-1">
                        <h1>{heading?.title}</h1>
                        <p>{heading?.para}</p>
                    </div>
                    
                    {/* Map over data array to render each item */}
                    {data && data.map((item, index) => (
                        <div key={index} className="catogries_setting flex w-80 justify-between px-3 py-1">
                            <div className="checkpoint flex justify-center items-center">
                                <label className="custom-checkbox">
                                    <input name="dummy" type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <h1 style={{ fontSize: '16px', color: "rgba(34, 34, 34, 1)" }}>{item.heading}</h1>
                            </div>
                            <div className="number">
                                <p style={{ fontSize: '16px', color: "rgba(34, 34, 34, 1)" }}>{item.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
