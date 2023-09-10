"use client"
import React from 'react'
// import Carousel from 'react-responsive-carousel'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



export default function CustomCarousel() {
  return (
    <Carousel
    autoPlay
    showThumbs={false}
    swipeable={true}
    >
        <img src="/1 (1).jpg" style={{minHeight:"150px"}}/>
        <img src="/1 (2).jpg" style={{minHeight:"150px"}}/>
        <img src="/1 (3).jpg" style={{minHeight:"150px"}}/>
 
</Carousel>
  )
}
