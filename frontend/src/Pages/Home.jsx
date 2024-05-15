import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

import "./Home.css"

import Banner_1 from "../Componets/Assets/Banners/Banner_1.webp";
import Banner_2 from "../Componets/Assets/Banners/Banner_2.webp";
import Banner_3 from "../Componets/Assets/Banners/Banner_3.webp";
import Banner_4 from "../Componets/Assets/Banners/Banner_4.webp";

export const Home = () => {
  return (
    <div className='home'>
      
      <div className='home-carousel'>
      <Carousel className='home-carousel-slider rounded-bottom'>
       <Carousel.Item >
          <img
           className="w-100 rounded-bottom "
            src={Banner_1}
            alt="First slide"
         />
       </Carousel.Item>
       <Carousel.Item >
          <img
           className="w-100 rounded-bottom "
            src={Banner_2}
            alt="First slide"
         />
       </Carousel.Item>
       <Carousel.Item >
          <img
           className="w-100 rounded-bottom "
            src={Banner_3}
            alt="First slide"
         />
       </Carousel.Item>
       <Carousel.Item >
          <img
           className="w-100 rounded-bottom "
            src={Banner_4}
            alt="First slide"
         />
       </Carousel.Item>
      </Carousel>
      </div>
    </div>
  )
}
