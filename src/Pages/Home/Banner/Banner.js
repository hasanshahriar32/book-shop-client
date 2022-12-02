import React from 'react';
import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.png'
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';
import About from '../About/About';
import Categories from '../Category/Categories';
import Advertze from '../Advertize/Advertze';
import Advertizes from '../Advertize/Advertizes';

const Banner = () => {
    return (
        <div>
            <Carousel>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption className="slide-text">
            <p className='title'>Dive into the Guardian's Books Blog to discover a variety of engrossing articles on the books we know and love and their effects on us.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner2} alt="Second slide" />
  
            <Carousel.Caption className="slide-text">
              <p className='title'>Tidy and modern, Flavorwire offers several monthly articles that examine both time-honored classics and contemporary publications. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner3} alt="Third slide" />
  
            <Carousel.Caption className="slide-text">
            <p className='title'>An "internationally renowned book blogger and USA Today blog columnist," Vilma Iris recommendations.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
            <section>
                <About></About>
            </section>
            <section>
                <Advertizes></Advertizes>
            </section>
            <section>
                <Categories></Categories>
            </section>
            
        </div>

    );
};

export default Banner;