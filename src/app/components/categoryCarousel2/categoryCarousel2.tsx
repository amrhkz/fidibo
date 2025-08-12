"use client";

import "./categoryCarousel2.css";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CategoryCarousel2 = () => {
  return (
    <div className="section">
      <div className="event-carousel">
        <Swiper
          slidesPerView={6}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="material three-column-banner-item-2">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/be5e101c-fb42-4fa2-8b4c-95c436d0d3d9.jpg?width=200"
                alt=""
              />
              <div className="three-column-banner-item-content-2">
                با موسیقی کیهان کلهر
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item-2">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d9435ee0-523d-492e-930f-5d9d33b5b366.jpg?width=200"
                alt=""
              />
              <div className="three-column-banner-item-content-2">
                خاص‌ترین کتاب‌های فیدیبو
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item-2">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/49ee5ba8-7e01-44ac-93b9-aef20b806753.jpg?width=200"
                alt=""
              />
              <div className="three-column-banner-item-content-2">
                فقط در فیدیبو
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item-2">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/f141b76f-876f-4651-b3a3-d6cacf523232.jpg?width=200"
                alt=""
              />
              <div className="three-column-banner-item-content-2">
                پیشنهاد کتاب چهره‌ها
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item-2">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/469e5fb5-0c28-4b4f-b2f6-88516aa3b35c.jpg?width=200"
                alt=""
              />
              <div className="three-column-banner-item-content-2">
                پیشنهادهای کتاب
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item-2">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/57c1f47f-6d3c-4ed8-95a1-209fa479bc41.jpg?width=200"
                alt=""
              />
              <div className="three-column-banner-item-content-2">
                پرطرفدارترین سریال صوتی
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryCarousel2;
