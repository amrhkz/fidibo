"use client";

import "./maratonCarousel.css";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MaratonCarousel = () => {
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
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="material hl-cards-content-item-link">
              <img
                src="https://cdn.fidibo.com/phoenixpub/images/flex/general/424044c9-1bd2-4a01-a176-6814d83c6bd3.jpg?width=280"
                alt=""
              />
              <div className="hl-cards-content-item-title">
                ماراتن کتاب‌های سلامت روان
              </div>
              <div className="hl-cards-content-item-bottom">
                <div className="hl-cards-content-item-bottom-first">
                  <img
                    src="https://cdn.fidibo.com/phoenixpub/images/flex/general/e2f33eb6-cb69-4d0b-be99-4f9bc680e8f8.png?width=32"
                    alt=""
                  />
                  <div className="hl-cards-content-item-bottom-title">
                    فیدیبو
                  </div>
                </div>
                <div className="hl-cards-content-item-bottom-second">
                  <div>
                    8<span> </span>عنوان
                  </div>
                  <div className="hl-cards-content-item-bottom-second-separator"></div>
                  <div className="hl-cards-content-item-bottom-second-item">
                    <svg
                      className="hl-cards-content-item-bottom-second-icon"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.00065 3.85449C5.22377 3.85449 2.97266 6.1056 2.97266 8.88249C2.97266 11.6594 5.22377 13.9105 8.00065 13.9105C10.7775 13.9105 13.0286 11.6594 13.0286 8.88249C13.0286 6.1056 10.7775 3.85449 8.00065 3.85449ZM1.97266 8.88249C1.97266 5.55332 4.67148 2.85449 8.00065 2.85449C11.3298 2.85449 14.0286 5.55332 14.0286 8.88249C14.0286 12.2117 11.3298 14.9105 8.00065 14.9105C4.67148 14.9105 1.97266 12.2117 1.97266 8.88249Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 5.58057C8.27614 5.58057 8.5 5.80442 8.5 6.08057L8.5 7.83823C8.5 8.11438 8.27614 8.33823 8 8.33823C7.72386 8.33823 7.5 8.11438 7.5 7.83823L7.5 6.08057C7.5 5.80442 7.72386 5.58057 8 5.58057Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1.8335C11 2.10964 10.7761 2.3335 10.5 2.3335L5.16667 2.3335C4.89052 2.3335 4.66667 2.10964 4.66667 1.8335C4.66667 1.55735 4.89052 1.3335 5.16667 1.3335L10.5 1.3335C10.7761 1.3335 11 1.55735 11 1.8335Z"
                        fill="#97989A"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 8.38281C7.72386 8.38281 7.5 8.60667 7.5 8.88281C7.5 9.15895 7.72386 9.38281 8 9.38281C8.27614 9.38281 8.5 9.15895 8.5 8.88281C8.5 8.60667 8.27614 8.38281 8 8.38281ZM6.5 8.88281C6.5 8.05439 7.17157 7.38281 8 7.38281C8.82843 7.38281 9.5 8.05439 9.5 8.88281C9.5 9.71124 8.82843 10.3828 8 10.3828C7.17157 10.3828 6.5 9.71124 6.5 8.88281Z"
                        fill="#97989A"
                      ></path>
                    </svg>
                    <p>۸۱روز</p>
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

export default MaratonCarousel;
