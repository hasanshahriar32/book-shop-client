import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
                 <div className="container d-flex justify-content-center py-2">
                 <button type="button" className="btn footer-icon" >
                    <h4><FaFacebook/></h4>
                    
                </button>
                 <button type="button" className="btn footer-icon" >
                    <h4><FaInstagram/></h4>
                </button>
                 <button type="button" className="btn footer-icon" >
                    <h4><FaTwitter/></h4>
                </button>
                 <button type="button" className="btn footer-icon" >
                    <h4><FaYoutube/></h4>
                </button>
                </div>
            <p className='text-center mb-0 p-2' >Copyright &#169; 2022. All rights reserved by Book Shop</p>
        </div>
    );
};

export default Footer;