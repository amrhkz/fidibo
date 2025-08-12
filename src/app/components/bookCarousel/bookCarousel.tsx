"use client";

import "./bookCarousel.css";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BookCarousel = (props:any) => {
  return (
    <div className="section">
      <div className="book-carousel">
        <Swiper
          slidesPerView={props.spv}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hl-books-content-item-link">
              <div className="hl-books-content-item-img">
                <img src="/img/p_book_1.webp" alt="" />
                <div className="show-image-header">
                  <div className="hl-books-wide-content-item-badges">
                    <div className="off-badge">30%</div>
                  </div>
                </div>
                <div className="show-image-footer">
                  <div className="show-image-footer-icon-type">
                    <i className="bx bx-headphone"></i>
                  </div>
                </div>
              </div>
              <div className="hl-books-content-item-content">
                <div className="hl-books-content-item-content-title">
                  مغازه خودکشی
                </div>
                <div className="hl-books-content-item-content-subtitle">
                  <div className="hl-books-content-item-content-subtitle-text">
                    ژان تولی
                  </div>
                  <div className="hl-books-content-item-content-subtitle-separator"></div>
                  <div className="hl-books-content-item-content-subtitle-narrator">
                    هوتن شکیبا
                  </div>
                </div>
                <div className="hl-books-content-item-content-rate">
                  <i className="bx bxs-star"></i>
                  <div className="hl-books-content-item-content-rate-score">
                    4.4
                  </div>
                  <div className="hl-books-content-item-content-rate-responses">
                    (5,450)
                  </div>
                </div>
                <div className="horizontal-line"></div>
                <div className="hl-books-content-item-content-footer">
                  <div className="hl-books-content-item-content-price-discount">
                    58,000
                  </div>
                  <div className="hl-books-content-item-content-price-number">
                    40,600
                  </div>
                  <div className="hl-books-content-item-content-price-title">
                    تومان
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hl-books-content-item-link">
              <div className="hl-books-content-item-img">
                <img src="/img/p_book_1.webp" alt="" />
                <div className="show-image-header">
                  <div className="hl-books-wide-content-item-badges">
                    <div className="off-badge">30%</div>
                  </div>
                </div>
                <div className="show-image-footer">
                  <div className="show-image-footer-icon-type">
                    <i className="bx bx-headphone"></i>
                  </div>
                </div>
              </div>
              <div className="hl-books-content-item-content">
                <div className="hl-books-content-item-content-title">
                  مغازه خودکشی
                </div>
                <div className="hl-books-content-item-content-subtitle">
                  <div className="hl-books-content-item-content-subtitle-text">
                    ژان تولی
                  </div>
                  <div className="hl-books-content-item-content-subtitle-separator"></div>
                  <div className="hl-books-content-item-content-subtitle-narrator">
                    هوتن شکیبا
                  </div>
                </div>
                <div className="hl-books-content-item-content-rate">
                  <i className="bx bxs-star"></i>
                  <div className="hl-books-content-item-content-rate-score">
                    4.4
                  </div>
                  <div className="hl-books-content-item-content-rate-responses">
                    (5,450)
                  </div>
                </div>
                <div className="horizontal-line"></div>
                <div className="hl-books-content-item-content-footer">
                  <div className="hl-books-content-item-content-price-discount">
                    58,000
                  </div>
                  <div className="hl-books-content-item-content-price-number">
                    40,600
                  </div>
                  <div className="hl-books-content-item-content-price-title">
                    تومان
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hl-books-content-item-link">
              <div className="hl-books-content-item-img">
                <img src="/img/p_book_1.webp" alt="" />
                <div className="show-image-header">
                  <div className="hl-books-wide-content-item-badges">
                    <div className="off-badge">30%</div>
                  </div>
                </div>
                <div className="show-image-footer">
                  <div className="show-image-footer-icon-type">
                    <i className="bx bx-headphone"></i>
                  </div>
                </div>
              </div>
              <div className="hl-books-content-item-content">
                <div className="hl-books-content-item-content-title">
                  مغازه خودکشی
                </div>
                <div className="hl-books-content-item-content-subtitle">
                  <div className="hl-books-content-item-content-subtitle-text">
                    ژان تولی
                  </div>
                  <div className="hl-books-content-item-content-subtitle-separator"></div>
                  <div className="hl-books-content-item-content-subtitle-narrator">
                    هوتن شکیبا
                  </div>
                </div>
                <div className="hl-books-content-item-content-rate">
                  <i className="bx bxs-star"></i>
                  <div className="hl-books-content-item-content-rate-score">
                    4.4
                  </div>
                  <div className="hl-books-content-item-content-rate-responses">
                    (5,450)
                  </div>
                </div>
                <div className="horizontal-line"></div>
                <div className="hl-books-content-item-content-footer">
                  <div className="hl-books-content-item-content-price-discount">
                    58,000
                  </div>
                  <div className="hl-books-content-item-content-price-number">
                    40,600
                  </div>
                  <div className="hl-books-content-item-content-price-title">
                    تومان
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hl-books-content-item-link">
              <div className="hl-books-content-item-img">
                <img src="/img/p_book_1.webp" alt="" />
                <div className="show-image-header">
                  <div className="hl-books-wide-content-item-badges">
                    <div className="off-badge">30%</div>
                  </div>
                </div>
                <div className="show-image-footer">
                  <div className="show-image-footer-icon-type">
                    <i className="bx bx-headphone"></i>
                  </div>
                </div>
              </div>
              <div className="hl-books-content-item-content">
                <div className="hl-books-content-item-content-title">
                  مغازه خودکشی
                </div>
                <div className="hl-books-content-item-content-subtitle">
                  <div className="hl-books-content-item-content-subtitle-text">
                    ژان تولی
                  </div>
                  <div className="hl-books-content-item-content-subtitle-separator"></div>
                  <div className="hl-books-content-item-content-subtitle-narrator">
                    هوتن شکیبا
                  </div>
                </div>
                <div className="hl-books-content-item-content-rate">
                  <i className="bx bxs-star"></i>
                  <div className="hl-books-content-item-content-rate-score">
                    4.4
                  </div>
                  <div className="hl-books-content-item-content-rate-responses">
                    (5,450)
                  </div>
                </div>
                <div className="horizontal-line"></div>
                <div className="hl-books-content-item-content-footer">
                  <div className="hl-books-content-item-content-price-discount">
                    58,000
                  </div>
                  <div className="hl-books-content-item-content-price-number">
                    40,600
                  </div>
                  <div className="hl-books-content-item-content-price-title">
                    تومان
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hl-books-content-item-link">
              <div className="hl-books-content-item-img">
                <img src="/img/p_book_1.webp" alt="" />
                <div className="show-image-header">
                  <div className="hl-books-wide-content-item-badges">
                    <div className="off-badge">30%</div>
                  </div>
                </div>
                <div className="show-image-footer">
                  <div className="show-image-footer-icon-type">
                    <i className="bx bx-headphone"></i>
                  </div>
                </div>
              </div>
              <div className="hl-books-content-item-content">
                <div className="hl-books-content-item-content-title">
                  مغازه خودکشی
                </div>
                <div className="hl-books-content-item-content-subtitle">
                  <div className="hl-books-content-item-content-subtitle-text">
                    ژان تولی
                  </div>
                  <div className="hl-books-content-item-content-subtitle-separator"></div>
                  <div className="hl-books-content-item-content-subtitle-narrator">
                    هوتن شکیبا
                  </div>
                </div>
                <div className="hl-books-content-item-content-rate">
                  <i className="bx bxs-star"></i>
                  <div className="hl-books-content-item-content-rate-score">
                    4.4
                  </div>
                  <div className="hl-books-content-item-content-rate-responses">
                    (5,450)
                  </div>
                </div>
                <div className="horizontal-line"></div>
                <div className="hl-books-content-item-content-footer">
                  <div className="hl-books-content-item-content-price-discount">
                    58,000
                  </div>
                  <div className="hl-books-content-item-content-price-number">
                    40,600
                  </div>
                  <div className="hl-books-content-item-content-price-title">
                    تومان
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hl-books-content-item-link">
              <div className="hl-books-content-item-img">
                <img src="/img/p_book_1.webp" alt="" />
                <div className="show-image-header">
                  <div className="hl-books-wide-content-item-badges">
                    <div className="off-badge">30%</div>
                  </div>
                </div>
                <div className="show-image-footer">
                  <div className="show-image-footer-icon-type">
                    <i className="bx bx-headphone"></i>
                  </div>
                </div>
              </div>
              <div className="hl-books-content-item-content">
                <div className="hl-books-content-item-content-title">
                  مغازه خودکشی
                </div>
                <div className="hl-books-content-item-content-subtitle">
                  <div className="hl-books-content-item-content-subtitle-text">
                    ژان تولی
                  </div>
                  <div className="hl-books-content-item-content-subtitle-separator"></div>
                  <div className="hl-books-content-item-content-subtitle-narrator">
                    هوتن شکیبا
                  </div>
                </div>
                <div className="hl-books-content-item-content-rate">
                  <i className="bx bxs-star"></i>
                  <div className="hl-books-content-item-content-rate-score">
                    4.4
                  </div>
                  <div className="hl-books-content-item-content-rate-responses">
                    (5,450)
                  </div>
                </div>
                <div className="horizontal-line"></div>
                <div className="hl-books-content-item-content-footer">
                  <div className="hl-books-content-item-content-price-discount">
                    58,000
                  </div>
                  <div className="hl-books-content-item-content-price-number">
                    40,600
                  </div>
                  <div className="hl-books-content-item-content-price-title">
                    تومان
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hl-books-content-item-link">
              <div className="hl-books-content-item-img">
                <img src="/img/p_book_1.webp" alt="" />
                <div className="show-image-header">
                  <div className="hl-books-wide-content-item-badges">
                    <div className="off-badge">30%</div>
                  </div>
                </div>
                <div className="show-image-footer">
                  <div className="show-image-footer-icon-type">
                    <i className="bx bx-headphone"></i>
                  </div>
                </div>
              </div>
              <div className="hl-books-content-item-content">
                <div className="hl-books-content-item-content-title">
                  مغازه خودکشی
                </div>
                <div className="hl-books-content-item-content-subtitle">
                  <div className="hl-books-content-item-content-subtitle-text">
                    ژان تولی
                  </div>
                  <div className="hl-books-content-item-content-subtitle-separator"></div>
                  <div className="hl-books-content-item-content-subtitle-narrator">
                    هوتن شکیبا
                  </div>
                </div>
                <div className="hl-books-content-item-content-rate">
                  <i className="bx bxs-star"></i>
                  <div className="hl-books-content-item-content-rate-score">
                    4.4
                  </div>
                  <div className="hl-books-content-item-content-rate-responses">
                    (5,450)
                  </div>
                </div>
                <div className="horizontal-line"></div>
                <div className="hl-books-content-item-content-footer">
                  <div className="hl-books-content-item-content-price-discount">
                    58,000
                  </div>
                  <div className="hl-books-content-item-content-price-number">
                    40,600
                  </div>
                  <div className="hl-books-content-item-content-price-title">
                    تومان
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

export default BookCarousel;
