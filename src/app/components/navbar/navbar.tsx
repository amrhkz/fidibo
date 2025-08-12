"use client";

import "./navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  function dropside() {
    document.querySelector(".dropside-menu")?.classList.toggle("active");
  }
  function dropside_2() {
    document.querySelector(".dropside-menu-2")?.classList.toggle("active");
  }
  const pathname = usePathname();
  function darkMode() {
    document.querySelector("body")?.classList.toggle("dark");
  }
  return (
    <div className="navbar">
      <div className="nav-top">
        <img src="/img/Fidibo-logo.png" alt="" />
        <div className="search-field">
          <i className="bx bx-search-alt-2"></i>
          <input type="text" placeholder="جستجو در فیدیبو" />
        </div>
        <div className="nav-top-right">
          <button className="my-lib-btn">
            <i className="bx bx-book"></i>
            <span>کتابخانه من</span>
          </button>
          <Link href={"/login"} className="profile-btn">
            <i className="bx bx-user"></i>
            <i className="bx bx-chevron-down"></i>
          </Link>
          <button className="cart-btn">
            <i className="bx bx-shopping-bag"></i>
          </button>
          <div className="divider"></div>
          <button className="dark-mode-btn" onClick={darkMode}>
            <i className="bx bxs-sun"></i>
          </button>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="search-field">
          <i className="bx bx-search-alt-2"></i>
          <input type="text" placeholder="جستجو در فیدیبو" />
        </div>
        <ul>
          <li>
            <a href="#">
              <i className="bx bx-home-smile"></i>
              <span>خانه</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-book"></i>
              <span>کتاب الکترونیک</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-headphone"></i>
              <span>کتاب صوتی</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-podcast"></i>
              <span>پادکست ها</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-news"></i>
              <span>مجلات</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-graduation"></i>
              <span>درسی و دانشگاهی</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-star"></i>
              <span>فیدی پلاس</span>
            </a>
          </li>
        </ul>
        <button className="app-dl-btn">
          <i className="bx bx-mobile-alt"></i>
          <span>دانلود اپلیکیشن</span>
          <i className="bx bx-chevron-left"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
