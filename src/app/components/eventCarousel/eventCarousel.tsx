"use client";

import "./eventCarousel.css";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const EventCarousel = () => {
  return (
    <div className="section">
      <div className="event-carousel">
        <Swiper
          slidesPerView={2.25}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/img/event_1.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/event_2.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/event_3.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/event_4.webp" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default EventCarousel;
