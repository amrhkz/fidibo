"use client";

import "./blogCarousel.css";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BlogCarousel = () => {
  return (
    <div className="section">
      <div className="book-carousel">
        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="material vl-cards-full-content-item">
              <div className="vl-cards-full-content-item-img-cont">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/3f34340e-e714-4e45-b893-ed2e4d134f01.jpg?width=280"
                  alt=""
                />
              </div>
              <div className="vl-cards-full-content-item-content">
                <div className="vl-cards-full-content-item-content-title">
                  هشت داستان کلاسیک کودک که هر کودکی باید بخواند
                </div>
                <div className="vl-cards-full-content-item-bottom">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d590fc0f-4d69-4bbd-a738-34c19e748dd3.jpg?width=48"
                    alt=""
                  />
                  <div className="vl-cards-full-content-item-bottom-title">
                    امیرمحمد مرندی
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material vl-cards-full-content-item">
              <div className="vl-cards-full-content-item-img-cont">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/3f34340e-e714-4e45-b893-ed2e4d134f01.jpg?width=280"
                  alt=""
                />
              </div>
              <div className="vl-cards-full-content-item-content">
                <div className="vl-cards-full-content-item-content-title">
                  هشت داستان کلاسیک کودک که هر کودکی باید بخواند
                </div>
                <div className="vl-cards-full-content-item-bottom">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d590fc0f-4d69-4bbd-a738-34c19e748dd3.jpg?width=48"
                    alt=""
                  />
                  <div className="vl-cards-full-content-item-bottom-title">
                    امیرمحمد مرندی
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material vl-cards-full-content-item">
              <div className="vl-cards-full-content-item-img-cont">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/3f34340e-e714-4e45-b893-ed2e4d134f01.jpg?width=280"
                  alt=""
                />
              </div>
              <div className="vl-cards-full-content-item-content">
                <div className="vl-cards-full-content-item-content-title">
                  هشت داستان کلاسیک کودک که هر کودکی باید بخواند
                </div>
                <div className="vl-cards-full-content-item-bottom">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d590fc0f-4d69-4bbd-a738-34c19e748dd3.jpg?width=48"
                    alt=""
                  />
                  <div className="vl-cards-full-content-item-bottom-title">
                    امیرمحمد مرندی
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material vl-cards-full-content-item">
              <div className="vl-cards-full-content-item-img-cont">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/3f34340e-e714-4e45-b893-ed2e4d134f01.jpg?width=280"
                  alt=""
                />
              </div>
              <div className="vl-cards-full-content-item-content">
                <div className="vl-cards-full-content-item-content-title">
                  هشت داستان کلاسیک کودک که هر کودکی باید بخواند
                </div>
                <div className="vl-cards-full-content-item-bottom">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d590fc0f-4d69-4bbd-a738-34c19e748dd3.jpg?width=48"
                    alt=""
                  />
                  <div className="vl-cards-full-content-item-bottom-title">
                    امیرمحمد مرندی
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material vl-cards-full-content-item">
              <div className="vl-cards-full-content-item-img-cont">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/3f34340e-e714-4e45-b893-ed2e4d134f01.jpg?width=280"
                  alt=""
                />
              </div>
              <div className="vl-cards-full-content-item-content">
                <div className="vl-cards-full-content-item-content-title">
                  هشت داستان کلاسیک کودک که هر کودکی باید بخواند
                </div>
                <div className="vl-cards-full-content-item-bottom">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d590fc0f-4d69-4bbd-a738-34c19e748dd3.jpg?width=48"
                    alt=""
                  />
                  <div className="vl-cards-full-content-item-bottom-title">
                    امیرمحمد مرندی
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material vl-cards-full-content-item">
              <div className="vl-cards-full-content-item-img-cont">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/3f34340e-e714-4e45-b893-ed2e4d134f01.jpg?width=280"
                  alt=""
                />
              </div>
              <div className="vl-cards-full-content-item-content">
                <div className="vl-cards-full-content-item-content-title">
                  هشت داستان کلاسیک کودک که هر کودکی باید بخواند
                </div>
                <div className="vl-cards-full-content-item-bottom">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/d590fc0f-4d69-4bbd-a738-34c19e748dd3.jpg?width=48"
                    alt=""
                  />
                  <div className="vl-cards-full-content-item-bottom-title">
                    امیرمحمد مرندی
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogCarousel;
