"use client";

import "./banner.css";
import Link from "next/link";
import React, { useRef, useState } from 'react';
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <div className="banner">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="/img/banner_1.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner_2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner_3.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner_4.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner_5.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner_6.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner_7.webp" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
