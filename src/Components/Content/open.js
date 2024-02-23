import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './open.css'; // Nếu có CSS tùy chỉnh
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


const Background = ({ images }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: false }}
      style={{marginTop: '64px'}}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} style={{width: '1920px', height: '700px'}} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Background;
