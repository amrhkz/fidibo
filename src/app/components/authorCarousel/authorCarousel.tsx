"use client";

import "./authorCarousel.css";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const AuthorCarousel = (props: any) => {
  const pathname = usePathname();
  return (
    <div className="flex-row-container-content-cont">
      <Swiper
        slidesPerView={props.spv}
        spaceBetween={25}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="material hl-logos-content-item">
            <img
              draggable="false"
              className="hl-logos-content-item-img image-loading-main load-end"
              src="https://cdn.fidibo.com/phoenixpub/images/flex/general/fa352522-117c-4ecf-a1da-d0a8ff4a344a.jpeg?width=71"
              alt="محمود دولت آبادی"
              loading="lazy"
              fetchPriority="auto"
            />
            <div className="hl-logos-content-item-title">محمود دولت آبادی</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="material hl-logos-content-item">
            <img
              draggable="false"
              className="hl-logos-content-item-img image-loading-main load-end"
              src="https://cdn.fidibo.com/phoenixpub/images/flex/general/fa352522-117c-4ecf-a1da-d0a8ff4a344a.jpeg?width=71"
              alt="محمود دولت آبادی"
              loading="lazy"
              fetchPriority="auto"
            />
            <div className="hl-logos-content-item-title">محمود دولت آبادی</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="material hl-logos-content-item">
            <img
              draggable="false"
              className="hl-logos-content-item-img image-loading-main load-end"
              src="https://cdn.fidibo.com/phoenixpub/images/flex/general/fa352522-117c-4ecf-a1da-d0a8ff4a344a.jpeg?width=71"
              alt="محمود دولت آبادی"
              loading="lazy"
              fetchPriority="auto"
            />
            <div className="hl-logos-content-item-title">محمود دولت آبادی</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="material hl-logos-content-item">
            <img
              draggable="false"
              className="hl-logos-content-item-img image-loading-main load-end"
              src="https://cdn.fidibo.com/phoenixpub/images/flex/general/fa352522-117c-4ecf-a1da-d0a8ff4a344a.jpeg?width=71"
              alt="محمود دولت آبادی"
              loading="lazy"
              fetchPriority="auto"
            />
            <div className="hl-logos-content-item-title">محمود دولت آبادی</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="material hl-logos-content-item">
            <img
              draggable="false"
              className="hl-logos-content-item-img image-loading-main load-end"
              src="https://cdn.fidibo.com/phoenixpub/images/flex/general/fa352522-117c-4ecf-a1da-d0a8ff4a344a.jpeg?width=71"
              alt="محمود دولت آبادی"
              loading="lazy"
              fetchPriority="auto"
            />
            <div className="hl-logos-content-item-title">محمود دولت آبادی</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="material hl-logos-content-item">
            <img
              draggable="false"
              className="hl-logos-content-item-img image-loading-main load-end"
              src="https://cdn.fidibo.com/phoenixpub/images/flex/general/fa352522-117c-4ecf-a1da-d0a8ff4a344a.jpeg?width=71"
              alt="محمود دولت آبادی"
              loading="lazy"
              fetchPriority="auto"
            />
            <div className="hl-logos-content-item-title">محمود دولت آبادی</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="material hl-logos-content-item">
            <img
              draggable="false"
              className="hl-logos-content-item-img image-loading-main load-end"
              src="https://cdn.fidibo.com/phoenixpub/images/flex/general/fa352522-117c-4ecf-a1da-d0a8ff4a344a.jpeg?width=71"
              alt="محمود دولت آبادی"
              loading="lazy"
              fetchPriority="auto"
            />
            <div className="hl-logos-content-item-title">محمود دولت آبادی</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="material hl-logos-content-item">
            <img
              draggable="false"
              className="hl-logos-content-item-img image-loading-main load-end"
              src="https://cdn.fidibo.com/phoenixpub/images/flex/general/fa352522-117c-4ecf-a1da-d0a8ff4a344a.jpeg?width=71"
              alt="محمود دولت آبادی"
              loading="lazy"
              fetchPriority="auto"
            />
            <div className="hl-logos-content-item-title">محمود دولت آبادی</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AuthorCarousel;
