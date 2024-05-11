import React from 'react'

import Slider_1 from "../Componets/Assets/Slider/Slider_1.webp";
import Slider_2 from "../Componets/Assets/Slider/Slider_2.webp";

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import "./Home.css"

export const Home = () => {
  return (
    <div className='home'>
      
      <div className='carousel'>
      <Carousel className='carousel-slider rounded-bottom'>
       <Carousel.Item >
          <img
           className="large-image w-100 rounded-bottom "
            src={Slider_1}
            alt="First slide"
         />
          <img
           className="small-image  w-100 rounded-bottom"
            src={Slider_2}
            alt="First slide"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
            className="large-image w-100 rounded-bottom"
            src={Slider_1}
            alt="Second slide"
          />
          <img
           className="small-image  w-100 rounded-bottom"
            src={Slider_2}
            alt="First slide"
         />
        </Carousel.Item>
       <Carousel.Item>
         <img
            className="large-image w-100 rounded-bottom"
            src={Slider_1}
           alt="Third slide"
         />
          <img
           className="small-image  w-100 rounded-bottom"
            src={Slider_2}
            alt="First slide"
         />
        </Carousel.Item>
        <Carousel.Item >
         <img
            className="large-image w-100 rounded-bottom"
            src={Slider_1}
            alt="Fourth slide"
         />
          <img
           className="small-image  w-100 rounded-bottom"
            src={Slider_2}
            alt="First slide"
         />
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  )
}
