import React from 'react'

import Slider_1 from "../Componets/Assets/Slider/Slider_1.webp";
import Slider_2 from "../Componets/Assets/Slider/Slider_2.webp";

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./Home.css"

export const Home = () => {
  return (
    <div className='home'>
      
      <div className='f-carousel-slider'>
      <Carousel className='f-carousel rounded-bottom'>
       <Carousel.Item className='d-block w-100 rounded-bottom'>
          <img
           className="d-block w-100 rounded-bottom"
            src={Slider_1}
            alt="First slide"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
            className="d-block w-100 rounded-bottom"
            src={Slider_2}
            alt="Second slide"
          />
        </Carousel.Item>
       <Carousel.Item>
         <img
            className="d-block w-100 rounded-bottom"
            src={Slider_1}
           alt="Third slide"
         />
        </Carousel.Item>
        <Carousel.Item >
         <img
            className="d-block w-100 rounded-bottom"
            src={Slider_2}
            alt="Fourth slide"
         />
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  )
}
