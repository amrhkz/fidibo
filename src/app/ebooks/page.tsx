"use client";

import AuthorCarousel from "../components/authorCarousel/authorCarousel";
import BookCarousel from "../components/bookCarousel/bookCarousel";
import CatCarousel from "../components/catCarousel/catCarousel";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Seperator from "../components/seperator/seperator";
import "./ebooks.css";

const Ebooks = () => {
  return (
    <>
      <Navbar />
      <div className="base-category-content">
        <div className="base-category-content-first">
          <div className="base-category-content-box">
            <div className="base-category-content-box-title">
              همۀ دسته‌های موضوعی
            </div>
            <div>
              <a
                className="material base-category-content-box-name "
                draggable="false"
                href="/ebooks"
              >
                <div className="base-category-content-box-name-first">
                  <svg
                    className="base-category-content-box-name-first-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div className="base-category-content-box-name-first-detail">
                    کتاب متنی
                  </div>
                </div>
              </a>
            </div>
            <div className="base-category-content-box-children">
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/psychology"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>روانشناسی</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/story"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>داستان و رمان</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/management"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>مدیریت و بازاریابی</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/social-sciences"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>علوم اجتماعی</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/literature"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>ادبیات</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/history"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>تاریخ</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/lifestyle"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>سبک زندگی</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/art"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>هنر</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/philosophy"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>فلسفه و عرفان</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/kid"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>کودک</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/religion"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>دین و مذهب</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/scientific"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>علمی</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/teenager"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>نوجوان</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/language-learning"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>آموزش زبان خارجی</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/finance"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>مالی و سرمایه‌گذاری</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/freebooks"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>کتاب رایگان</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/myth"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <svg
                    className="base-category-content-box-children-item-material-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                      fill="#191c1e"
                    ></path>
                  </svg>
                  <div>اسطوره</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/biography"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <div>زندگی‌نامه و سفرنامه</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/political-sciences"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <div>علوم سیاسی</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/technology"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <div>کامپیوتر</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/microbook"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <div>میکروبوک و خلاصه‌کتاب</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/industry-technology"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <div>صنعت و تکنولوژی</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/feminism"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <div>مطالعات زنان</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/reference-book"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <div>دایره‌المعارف و فرهنگ‌نامه</div>
                </div>
              </a>
              <a
                className="material base-category-content-box-children-item "
                draggable="false"
                href="/ebooks/comic"
              >
                <div className="base-category-content-box-children-item-material-detail">
                  <div>کمیک و داستان مصور</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="base-category-content-second is-container">
          <div className="base-category-content-desc">
            <h1 className="base-category-content-desc-title">
              معرفی و دانلود بهترین کتاب‌های متنی
            </h1>
            <div className="expandable-desc base-category-content-desc-text ">
              <h2
                className="ql-align-right ql-direction-rtl"
                style={{ fontSize: "14px" }}
              >
                <strong>خرید و دانلود بهترین کتاب‌های متنی</strong>
              </h2>
              <p className="ql-align-right ql-direction-rtl">
                بخش کتاب الکترونیک فیدیبو، گنجینه‌ای از دانش و سرگرمی است که به
                مثابه قفسه‌های پر از کتاب در یک کتابخانه عظیم، خواننده را به
                سفری در میان ژانرهای مختلف، از رمان‌های عاشقانه و پرفروش گرفته
                تا کتاب‌های علمی تخیلی و فلسفی دعوت می‌کند. صفحه اصلی سایت کتاب
                الکترونیکی فیدیبو، شامل دو دسته کتاب الکترونیکی صوتی و متنی است.
                در قسمت کتاب‌های متنی این صفحه، که نخستین نقطه تعامل کاربر با
                دنیای کتاب الکترونیک متنی فیدیبو است در بخش{" "}
                <a
                  href="https://fidibo.com/ebooks"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  معرفی و دانلود بهترین کتاب‌های متنی
                </a>{" "}
                دسته‌بندی‌های مختلف ژانرها و موضوعات کتاب‌ها به تفصیل معرفی
                شده‌اند. عناوین ژانرهای اصلی موجود در قسمت کتاب‌های متنی فیدیبو
                عبارتند از:{" "}
                <a
                  href="https://fidibo.com/ebooks/psychology"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  روانشناسی
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/story"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  داستان و رمان
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/management"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  مدیریت و بازاریابی
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/social-sciences"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  علوم اجتماعی
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/literature"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ادبیات
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/biography"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  زندگینامه و سفرنامه
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/history"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  تاریخ
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/lifestyle"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  سبک زندگی
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/art"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  هنر
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/philosophy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  فلسفه و عرفان
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/kid"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  کودک
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/political-sciences"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  علوم سیاسی
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/religion"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  دین و مذهب
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/technology"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  کامپیوتر
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/scientific"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  علمی
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/teenager"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  نوجوان،{" "}
                </a>
                &nbsp;
                <a
                  href="https://fidibo.com/ebooks/language-learning"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  آموزش زبان خارجی
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/finance"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  مالی و سرمایه‌گذاری
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/industry-technology"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  صنعت و تکنولوژی
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/reference-book"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  دایره المعارف و فرهنگ‌نامه
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/feminism"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  مطالعات زنان
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/comic"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  کمیک و داستان مصور
                </a>
                ،{" "}
                <a
                  href="https://fidibo.com/ebooks/myth"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  اسطوره،
                </a>{" "}
                <a
                  href="https://fidibo.com/ebooks/freebooks"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  دانلود کتاب رایگان
                </a>{" "}
                و{" "}
                <a
                  href="https://fidibo.com/ebooks/microbook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  میکروبوک و خلاصه‌ کتاب آنلاین
                </a>
                . با کلیک روی هر کدام از ژانرهای مورد علاقه خود و مشاهده کتاب
                الکترونیک مورد نظر خود به انبوهی از آثار فاخر در حوزه‌های مختلف،
                دسترسی پیدا خواهید کرد. &nbsp;اطلاعات و مشخصات کتاب مورد علاقه
                شما اعم از نام کامل کتاب، نویسنده، مترجم، ناشر کتاب، قیمت کتاب
                الکترونیکی و لینک خرید کتاب الکترونیک و یک لینک دانلود رایگان
                کتاب به صورت قسمتی از متن کتاب آنلاین نمایش داده می‌شود. با خرید
                کتاب‌ الکترونیکی از نویسندگان و پدیدآورندگان آثار مورد علاقه خود
                حمایت کنید.{" "}
              </p>
              <p className="ql-align-right ql-direction-rtl">
                <br />
              </p>
              <h2 className="ql-align-right ql-direction-rtl">
                <strong>معرفی کتاب‌های متنی پرفروش</strong>
              </h2>
              <p className="ql-align-right ql-direction-rtl">
                <br />
              </p>
              <p className="ql-align-right ql-direction-rtl">
                مطالعه پرفروش‌ترین کتاب‌های متنی از بخش داستان و رمان خارجی،
                می‌توان از کتاب عقاید یک دلقک نوشته هاینریش بل از انتشارات مجید
                و کتاب جاسوس اثر پائولو کوئیلو از انتشارات شمشاد و کتاب صد سال
                تنهایی اثر جاویدان گابریل گارسیا مارکز از انتشارات مجید را نام
                برد. در بخش روانشناسی کاربردی‌ترین کتاب‌های حوزه موفقیت و
                انگیزشی، کتاب اثر مرکب نوشته دارن هاردی از انتشارات آموخته و
                کتاب چگونه می توانید با هر کسی در هر شرایطی صحبت کنید؟ نوشته اما
                سارجنت و تیم فرون در حوزه روابط اجتماعی از نشر شبگیر از
                نمونه‌های موفق و پرفروش این حوزه هستند.&nbsp;
              </p>
              <p className="ql-align-right ql-direction-rtl">
                در بخش ادبیات، حوزه ادبیات نمایشی نیز &nbsp;نمایشنامه خرده
                جنایت‌های زناشوهری اثر اریک امانوئل اشمیت از انتشارات قطره یکی
                از پرفروش‌ترین نمایشنامه‌ها در فیدیبو، در دسترس عموم قرار دارد.
                &nbsp;از جدیدترین تازه‌های نشر کتاب هم، کتاب بیست و سه نوشته رضا
                قرالو از انتشارات پیدایش یک نمونه از کتاب‌های متنی پرفروش فیدیبو
                در بخش داستان و رمان فارسی است. با دانلود کتاب ملت عشق نوشته
                الیف شافاک از گروه انتشاراتی ققنوس به محبوب‌ترین درام خارجی دست
                خواهید یافت. همچنین با خرید کتاب عادت های اتمی نوشته جیمز کلیر و
                استفاده از راهکارهای توصیه شده‌ی کتاب در زندگی شخصی، متوجه
                تغییرات کوچک، نتایج قابل توجه آن می‌شوید. از معروف‌ترین کتاب‌های
                پرفروش متنی از ژانر داستان و رمان خارجی&nbsp;عاشقانه می‌توان از
                کتاب مرشد و مارگاریتا نوشته میخائیل بولکاگف از انتشارات مجید نام
                برد. شما هم می‌توانید با مراجعه به بخش{" "}
                <a
                  href="https://fidibo.com/ebooks?sort=BESTSELLER"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  پرفروش‌های متنی
                </a>
                ، فهرست کامل پرفروش‌ها را در ژانرهای مختلف مشاهده کرده و کتاب
                مورد علاقه خود را به راحتی انتخاب و دانلود کنید.
              </p>
              <p className="ql-align-right ql-direction-rtl">
                <br />
              </p>
              <h2 className="ql-align-right ql-direction-rtl">
                <strong>دانلود کتاب‌های رایگان متنی </strong>
              </h2>
              <p className="ql-align-right ql-direction-rtl">
                <br />
              </p>
              <p className="ql-align-right ql-direction-rtl">
                یکی از مزایای فیدیبو دسترسی به کتاب‌های الکترونیکی رایگان است.
                این کتاب‌ها در ژانرهای مختلف، از ادبیات و تاریخ گرفته تا علوم و
                فلسفه، ارائه می‌شوند و می‌توانند منبعی ارزشمند برای دانش‌آموزان،
                دانشجویان، پژوهشگران و کتاب‌دوستان باشند. کتاب هری پاتر و فرزند
                نفرین شده نوشته جی کی رولینگ، جان تیفانی و جک ترون از محبوب‌ترین
                کتاب‌های رایگان در فیدیبو است. کتاب نوستالژیک دور دنیا در هشتاد
                روز اثر ژول ورن را از بخش رایگان کتاب‌های متنی فیدیو دانلود کرده
                و از خواندن این اثر فاخر و به یادماندنی لذت ببرید. در بخش
                زندگی‌نامه و سفرنامه هم به جهت آشنایی با مفاخر دنیا از دانلود
                رایگان کتاب استیون هاوکینگ نوشته مهدی مؤمن زاده به اهتمام فیدیبو
                بهره‌مند شوید. همچنین فیدیبو در بخش آموزش نیز به جهت دغدغه‌های
                اجتماعی کتاب‌هایی به رایگان در اختیار عموم قرار داده است، مانند
                کتاب آموزش مسائل جنسی به کودکان، که در این کتاب به تفصیل در مورد
                پرسش چطور کودکانمان را نسبت به مسائل جنسی آگاه کنیم؟ توضیح داده
                شده است. مطالعه{" "}
                <a
                  href="https://fidibo.com/contents/list?free=1&amp;title=%DA%A9%D8%AA%D8%A7%D8%A8%E2%80%8C%D9%87%D8%A7%DB%8C+%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86+%D9%85%D8%AA%D9%86%DB%8C&amp;types=%5B1%5D"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  کتاب‌های الکترونیکی رایگان فیدیبو
                </a>
                ، فرصتی عالی برای ارتقای دانش و غنی‌سازی اوقات فراغت شماست. با
                گشتی در میان این گنجینه بی‌نظیر، یارّان دانایی را بیابید که در
                هر زمان و هر مکانی، همراه شما خواهند بود.
              </p>
              <p className="ql-align-right ql-direction-rtl">
                <br />
              </p>
            </div>
            <div
              className="expandable-desc-btn "
              style={{
                background:
                  "linear-gradient(0deg, #fff 50%, rgba(255, 255, 255, 0) 142.36%)",
              }}
            >
              <button
                className="material expandable-desc-btn-text "
                draggable="false"
              >
                توضیحات کامل
                <svg
                  className="expandable-desc-btn-text-icon"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1547 4.27094C13.3988 4.51501 13.3988 4.91074 13.1547 5.15482L8.17684 10.133L13.1547 15.1109C13.3988 15.3549 13.3988 15.7507 13.1547 15.9947C12.9106 16.2388 12.5149 16.2388 12.2708 15.9947L6.85103 10.5749C6.60695 10.3309 6.60695 9.93513 6.85102 9.69105L12.2708 4.27096C12.5149 4.02688 12.9106 4.02687 13.1547 4.27094Z"
                    fill="#28c4cc"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <CatCarousel/>
          <Seperator title="پرفروش‌های متنی"/>
          <BookCarousel spv="5"/>
          <Seperator title="قفسه‌ی نویسندگان محبوب" moreBtn="hidden"/>
          <AuthorCarousel spv="5"/>
          <Seperator title="تازه‌های متنی"/>
          <BookCarousel spv="5"/>
          <Seperator title="کتاب‌های رایگان متنی"/>
          <BookCarousel spv="5"/>
          <Seperator title="عاشقانه‌ها در دل داستان و رمان" />
          <BookCarousel spv="5"/>
          <Seperator title="محبوب‌های داستان و رمان" offPercant="به پیشنهاد فیدیبو"/>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Ebooks;
