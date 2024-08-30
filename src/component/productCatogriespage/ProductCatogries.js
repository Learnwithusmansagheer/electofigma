import React from 'react';
import './productCatogries.css';

export default function ProductCatogries() {
    return (
        <>
            <div className="set_catogries">
                <div className="ss flex bg-slate-400">
                    <h1>{title}</h1>
                    <p>{para}</p>
                </div>

                <div className="catogries_setting flex w-80 justify-between px-3 py-1">
                    <div className="checkpoint flex justify-center items-center">
                        <label className="custom-checkbox">
                            <input name="dummy" type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <h1 style={{ fontSize: '16px', color: "rgba(34, 34, 34, 1)" }}>{heading}</h1>
                    </div>
                    <div className="number">
                        <p style={{ fontSize: '16px', color: "rgba(34, 34, 34, 1)" }}>{paragraph}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
