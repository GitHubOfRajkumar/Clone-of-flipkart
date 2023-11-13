import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../Css/Slider.css";

// import required modules
import { Pagination } from "swiper";

export default function Slider() {

    // const buttosn = ()=>{
    //     console.log("Working")
    // }

  return (
    <>
   
      <Swiper
      style={{
        "--swiper-pagination-bullet-inactive-color": "white",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
        "--swiper-pagination-background-color": "transparent",
        "--swiper-pagination-bullet-border": "none",
      }}
        pagination={{
          dynamicBullets: true,
          
          // el: `swiper-container swiper-container-testClass`,
       bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
        }}
        modules={[Pagination]}
        
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="img" style={{width:"1350px",height:"643px"}} alt="" src="https://images.yourstory.com/cs/2/9456dfb02d6c11e9aa979329348d4c3e/Imageu5sb-1612502958709.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" style={{width:"1350px",height:"643px"}} alt="" src="https://i.gadgets360cdn.com/large/big-billion-days-2022-sale_1663819658737.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" style={{width:"1350px",height:"643px"}} alt="" src="https://assets.mspimages.in/wp-content/uploads/2021/10/Flipkart-Big-billion-days-2021-featured-image-1.jpeg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" style={{width:"1350px",height:"643px"}} alt="" src="https://blog.grabon.in/wp-content/uploads/2022/06/Flipkart-Upcoming-Sale.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" style={{width:"1350px",height:"643px"}} alt="" src="https://s3b.cashify.in/gpro/uploads/2022/09/19133141/Flipkart-Big-Billion-Days-Sale_-Grab-Huge-Discount-on-iPhone-13.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" style={{width:"1350px",height:"643px"}} alt="" src="https://www.smartprix.com/bytes/wp-content/uploads/2022/09/GIF-amazon.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" style={{width:"1350px",height:"643px"}} alt="" src="https://www.technotification.com/wp-content/uploads/2021/02/GHAS.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" style={{width:"1350px",height:"643px"}} alt="" src="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/flipkart-sp-deal-1.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" style={{width:"1350px",height:"643px"}} alt="" src="https://i.gadgets360cdn.com/large/flipkart_big_billion_days_2022_sale_tv_appliances_1663936508259.jpg"/>
        </SwiperSlide>
      </Swiper>
      
    </>
  );
}




{/* <Swiper
  style={{
    "--swiper-pagination-bullet-inactive-color": "white",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "16px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
    "--swiper-pagination-background-color": "transparent", // Set background to transparent
  }}
  pagination={{
    dynamicBullets: true,
    bulletClass: "swiper-pagination-bullet swiper-pagination-testClass",
  }}
  modules={[Pagination]}
  className="mySwiper"
>
  {/* Slides */}
// </Swiper>