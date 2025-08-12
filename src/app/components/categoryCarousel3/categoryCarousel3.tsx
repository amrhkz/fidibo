"use client";

import "./categoryCarousel3.css";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CategoryCarousel3 = () => {
  return (
    <div className="section">
      <div className="book-carousel">
        <Swiper
          slidesPerView={6}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="three-column-banner-item-3">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/de6da7bb-79a6-474e-a8ba-3e794590cfae.jpeg?width=199"
                alt=""
              />
              <div className="three-column-banner-item-content-3">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/83f31367-52e7-46db-82a9-8423ebecb8b1.png?width=40"
                  alt=""
                />
                <div className="three-column-banner-item-content-title-3">
                  داستان و رمان
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="three-column-banner-item-3">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/1724a085-13de-40b5-b280-866b96c34fff.jpeg?width=199"
                alt=""
              />
              <div className="three-column-banner-item-content-3">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/83f31367-52e7-46db-82a9-8423ebecb8b1.png?width=40"
                  alt=""
                />
                <div className="three-column-banner-item-content-title-3">
                  داستان و رمان
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="three-column-banner-item-3">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/ceb54fdb-cb34-439d-b0ff-dc10d63f668d.jpeg?width=199"
                alt=""
              />
              <div className="three-column-banner-item-content-3">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/83f31367-52e7-46db-82a9-8423ebecb8b1.png?width=40"
                  alt=""
                />
                <div className="three-column-banner-item-content-title-3">
                  داستان و رمان
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="three-column-banner-item-3">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/ebebed7e-c1b7-4953-bdb6-8ed5f305f60d.jpeg?width=199"
                alt=""
              />
              <div className="three-column-banner-item-content-3">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/83f31367-52e7-46db-82a9-8423ebecb8b1.png?width=40"
                  alt=""
                />
                <div className="three-column-banner-item-content-title-3">
                  داستان و رمان
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="three-column-banner-item-3">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/b617eda1-c658-4ed7-9622-af9551d680ac.jpeg?width=199"
                alt=""
              />
              <div className="three-column-banner-item-content-3">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/83f31367-52e7-46db-82a9-8423ebecb8b1.png?width=40"
                  alt=""
                />
                <div className="three-column-banner-item-content-title-3">
                  داستان و رمان
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="three-column-banner-item-3">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/b50aeaaa-dda1-479c-862c-43f5dd3b7a52.jpeg?width=199"
                alt=""
              />
              <div className="three-column-banner-item-content-3">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/83f31367-52e7-46db-82a9-8423ebecb8b1.png?width=40"
                  alt=""
                />
                <div className="three-column-banner-item-content-title-3">
                  داستان و رمان
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="three-column-banner-item-3">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/de6da7bb-79a6-474e-a8ba-3e794590cfae.jpeg?width=199"
                alt=""
              />
              <div className="three-column-banner-item-content-3">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/83f31367-52e7-46db-82a9-8423ebecb8b1.png?width=40"
                  alt=""
                />
                <div className="three-column-banner-item-content-title-3">
                  داستان و رمان
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="three-column-banner-item-3">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/de6da7bb-79a6-474e-a8ba-3e794590cfae.jpeg?width=199"
                alt=""
              />
              <div className="three-column-banner-item-content-3">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/83f31367-52e7-46db-82a9-8423ebecb8b1.png?width=40"
                  alt=""
                />
                <div className="three-column-banner-item-content-title-3">
                  داستان و رمان
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="three-column-banner-item-3">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/de6da7bb-79a6-474e-a8ba-3e794590cfae.jpeg?width=199"
                alt=""
              />
              <div className="three-column-banner-item-content-3">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/83f31367-52e7-46db-82a9-8423ebecb8b1.png?width=40"
                  alt=""
                />
                <div className="three-column-banner-item-content-title-3">
                  داستان و رمان
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="three-column-banner-item-3">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/de6da7bb-79a6-474e-a8ba-3e794590cfae.jpeg?width=199"
                alt=""
              />
              <div className="three-column-banner-item-content-3">
                <img
                  src="https://cdn.fidibo.com/phoenixpub/images/flex/general/83f31367-52e7-46db-82a9-8423ebecb8b1.png?width=40"
                  alt=""
                />
                <div className="three-column-banner-item-content-title-3">
                  داستان و رمان
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryCarousel3;
