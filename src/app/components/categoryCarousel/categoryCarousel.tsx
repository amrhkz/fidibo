"use client";

import "./categoryCarousel.css";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CategoryCarousel = () => {
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
            <div className="material three-column-banner-item">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d8cbbbd5-2f3a-45df-a098-3c777216e62d.png?width=40"
                alt=""
              />
              <div className="three-column-banner-item-content">برای برنامه‌ریزی</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/84d9d994-db2f-43d6-a910-eaefd1de9258.png?width=40"
                alt=""
              />
              <div className="three-column-banner-item-content">برای تغییر عادات</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d8cbbbd5-2f3a-45df-a098-3c777216e62d.png?width=40"
                alt=""
              />
              <div className="three-column-banner-item-content">برای برنامه‌ریزی</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d8cbbbd5-2f3a-45df-a098-3c777216e62d.png?width=40"
                alt=""
              />
              <div className="three-column-banner-item-content">برای برنامه‌ریزی</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d8cbbbd5-2f3a-45df-a098-3c777216e62d.png?width=40"
                alt=""
              />
              <div className="three-column-banner-item-content">برای برنامه‌ریزی</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d8cbbbd5-2f3a-45df-a098-3c777216e62d.png?width=40"
                alt=""
              />
              <div className="three-column-banner-item-content">برای برنامه‌ریزی</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d8cbbbd5-2f3a-45df-a098-3c777216e62d.png?width=40"
                alt=""
              />
              <div className="three-column-banner-item-content">برای برنامه‌ریزی</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d8cbbbd5-2f3a-45df-a098-3c777216e62d.png?width=40"
                alt=""
              />
              <div className="three-column-banner-item-content">برای برنامه‌ریزی</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d8cbbbd5-2f3a-45df-a098-3c777216e62d.png?width=40"
                alt=""
              />
              <div className="three-column-banner-item-content">برای برنامه‌ریزی</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material three-column-banner-item">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d8cbbbd5-2f3a-45df-a098-3c777216e62d.png?width=40"
                alt=""
              />
              <div className="three-column-banner-item-content">برای برنامه‌ریزی</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryCarousel;
