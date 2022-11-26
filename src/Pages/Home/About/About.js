import React from 'react';
import { FaExchangeAlt, FaGift, FaShoppingCart } from 'react-icons/fa';
import './About.css'

const About = () => {
    return (
        <div className='d-flex justify-content-around about-container'>
            <div className='d-flex flex-column'>
                <span className='about-icon'><FaShoppingCart/></span>
                <span className='about-num'>245221</span>
                <span className='about-text'>BOOK ORDERED</span>
            </div>
            <div className='d-flex flex-column'>
                <span className='about-icon'><FaGift/></span>
                <span className='about-num'>4232</span>
                <span className='about-text'>BOOK DONATED</span>
            </div>
            <div className='d-flex flex-column'>
                <span className='about-icon'><FaExchangeAlt/></span>
                <span className='about-num'>74521</span>
                <span className='about-text'>BOOK EXCHANGED</span>
            </div>
            
        </div>
    );
};

export default About;