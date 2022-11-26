import React from 'react';
import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.png'
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';
import About from '../About/About';

const Banner = () => {
    return (
        <div>
            <Carousel>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption className="slide-text">
            <p className='title'>Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner2} alt="Second slide" />
  
            <Carousel.Caption className="slide-text">
              <p className='title'>Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner3} alt="Third slide" />
  
            <Carousel.Caption className="slide-text">
            <p className='title'>Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
            <section>
                <About></About>
            </section>
        </div>

    );
};

export default Banner;