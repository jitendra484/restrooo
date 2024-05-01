// import React from 'react'

// const Hero = () => {
//   return (
//     <div>Hero</div>
//   )
// }

// export default Hero


import React from 'react';
import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import { assets } from '../../assets/assets';


function Hero() {
  return (
    <div className="">
    <Carousel  data-bs-theme="dark">
      <Carousel.Item >
        
        <img
          className=" hero d-block w-100"
          src={assets.header_img}
          alt="First slide"
          
          
          
          
        />
        <Carousel.Caption className='caption'>
            <div className='ca text-white'>
          <h5 className='d-flex justify-content-start fs-1 py-3  '>YUMMY FOOD HUB !!!</h5>
          <p className=' d-flex justify-content-start fs-4'>Visit once time.YUMMYYYYYYY </p>
          <p className=' d-flex justify-content-start fs-4'>YUMMYYYYYYY Time </p>
          </div>
        </Carousel.Caption>
        
        
        
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" hero d-block w-100"
          src={assets.header_2}
          alt="Second slide"
        />
        <Carousel.Caption className='caption'>
            <div className='ca text-white'>
          <h5 className='d-flex justify-content-start fs-1 py-3  '>YUMMY FOOD HUB !!!</h5>
          <p className=' d-flex justify-content-start fs-4'>Visit once time.YUMMYYYYYYY </p>
          <p className=' d-flex justify-content-start fs-4'>YUMMYYYYYYY Time </p>
          </div>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="hero d-block w-100"
          src={assets.header_3}
          alt="Third slide"
        />
     <Carousel.Caption className='caption'>
            <div className='ca text-white'>
          <h5 className='d-flex justify-content-start fs-1 py-3  '>YUMMY FOOD HUB !!!</h5>
          <p className=' d-flex justify-content-start fs-4'>Visit once time.YUMMYYYYYYY </p>
          <p className=' d-flex justify-content-start fs-4'>YUMMYYYYYYY Time </p>
          </div>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Hero;