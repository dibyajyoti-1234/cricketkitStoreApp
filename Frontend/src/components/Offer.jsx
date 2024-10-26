import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios" 

function Offer() {
  const [kit,setkit]=useState([])
  useEffect(()=>{
    const getkit=async()=>{
      try {
        const res=await axios.get("http://localhost:4001/kit");
        const data=res.data.filter((data)=>data.offer==="yes")
        console.log(data);
        setkit(data)
      } catch (error) {
        console.log("errors :",error)
      }
    }
    getkit();
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
    <div>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <h1 className='font-bold text-2xl pb-2'>Limited Offers(Save upto 30%)</h1>
    <h1 className=''>Save upto 30% on limited edition sports gear</h1>
    </div>
    
    <div>
    <Slider {...settings}>
        {kit.map((item=>(
          <Cards item={item} key={item.id}/> //passing item(that is filderdata) from offers.ejx(parent) to card.ejx(child) , this is called props
        )))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Offer