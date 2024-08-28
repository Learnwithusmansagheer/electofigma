import React from 'react';
import Productlist from '../../component/footerlist/Productlist';
import images1 from '../../assests/images/footerElecton.png';
import Subscribe from '../subscribe/Subscribe';
import { SlSocialGoogle } from "react-icons/sl";
import { ImFacebook2 } from "react-icons/im";
import { PiWhatsappLogo } from "react-icons/pi";
import './footer.css';

export default function Footer() {
    const info = [
        {
            heading: 'Find product',
            items: ['Brownze arnold', 'Chronograph blue', 'Smart phones', 'Automatic watch', 'Hair straighteners']
        },
        {
            heading: 'Get Help',
            items: ['About us', 'Contact us', 'Return policy', 'Privacy policy', 'Payment policy']
        },
        {
            heading: 'About us',
            items: ['News', 'Service', 'Our policy', 'Custmer care', 'Faq’s']
        }
    ];

    return (
        <>
            <div className="mainSetting-footer">
                <div className="subcribe">
                    <Subscribe />
                </div>

                <div className="footer_main">

                    <div className="contact_footer">
                        <div className="img">
                            <img src={images1} alt="Footer Logo" />
                        </div>
                        <div className="contact">
                            <p style={{ color: 'rgba(27, 90, 125, 1)' }}>64 St James Boulevard, Hoswick, ZE2 7ZJ</p>
                        </div>
                        <div className="socail-img">
                            <div className="set flex gap-9 py-4">
                                <SlSocialGoogle className='google size-8 hover:text-white hover:bg-red-950' />
                                <ImFacebook2 className='face size-8 hover:text-blue-950' />
                                <PiWhatsappLogo className='whatsapp size-8 hover:text-white hover:bg-green-700 rounded-full' />
                            </div>
                        </div>
                    </div>
                    <div className="productList_setting">
                        {info.map((item, index) => (
                            <Productlist
                                key={index}
                                heading={item.heading}
                                items={item.items}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
