import React, { useState } from 'react';
import ProductCatogries from './ProductCatogries';
import Hr from '../hrtag/Hr';
import './call.css';
import InformationHeading from '../informationHeading/InformationHeading';

export default function Callcatogriesproduct() {
    const [information, setInformation] = useState([
        { heading: 'All categories', paragraph: '10'},
        { heading: 'Tablet', paragraph: '5' },
        { heading: 'Laptop', paragraph: '15' },
        { heading: 'Head Phones', paragraph: '9' },
        { heading: 'Others', paragraph: '90' },
    ]);
const lll ={
    information.map(()=>(

    ))
}


    return (
        <>
            <div className="manu">
                {/* 
                <div className='ss flex flex-col  w-72  ml-6 justify-center '>
                    <InformationHeading
                        title={title}
                        para={para}
                    />
                </div>
                */}

                <div className="pro">
                    {/* {information.map((item, index) => ( */}
                        <ProductCatogries
                            key={index}
                            heading={item.heading}
                            paragraph={item.paragraph}
                            title={item.title}
                            para={itepara}
                        />
                    {/* ))} */}
                </div>
            </div>
            {/* <Hr/> */}
        </>
    );
}
