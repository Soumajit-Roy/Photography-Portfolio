import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import { Autoplay } from 'swiper/modules';

import './carousel.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
            delay:2500,
            disableOnInteraction: false,
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="cara-imgs/s1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="cara-imgs/s2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="cara-imgs/s3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="cara-imgs/s4.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="cara-imgs/s5.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="cara-imgs/s6.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="cara-imgs/s7.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="cara-imgs/s8.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="cara-imgs/s9.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
