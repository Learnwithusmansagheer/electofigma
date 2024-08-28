import React from 'react';
import './productlist.css';

export default function Productlist({ heading, items }) {
    return (
        <div>
            <div className="productlist">
                <div className="heading">
                    <h1>{heading}</h1>
                </div>
                <div className="list flex flex-col">
                    <ul className='ul'>
                        {items.map((item, index) => (
                            <li className='custom-list-item  list-disc list-inside ' key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
