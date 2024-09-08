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
          <img src="https://cdn.pixabay.com/photo/2023/12/22/01/37/woman-8463055_1280.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_1280.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://plus.unsplash.com/premium_photo-1683290222216-a9fab340cbf8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1716453166729-05df6105f381" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1629888401525-0d11ff26881f" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://plus.unsplash.com/premium_photo-1664303775888-6bc50a8d13a6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1513720002990-9ee5af030f64" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2023/11/05/13/19/christmas-8367102_1280.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
