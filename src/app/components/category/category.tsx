"use client";

import "./category.css";
import Link from "next/link";
import React, { useRef, useState } from 'react';
import { usePathname } from "next/navigation";

const Category = () => {
  const pathname = usePathname();
  return (
    <div className="section">
      <div className="category">
        <a href="#" className="cat-card">
          <i className="bx bx-book"></i>
          <span> کتاب متنی </span>
        </a>
        <a href="#" className="cat-card">
          <i className="bx bx-headphone"></i>
          <span> کتاب صوتی </span>
        </a>
        <a href="#" className="cat-card">
          <i className="bx bx-star"></i>
          <span> فیدی پلاس </span>
        </a>
        <a href="#" className="cat-card">
          <i className="bx bx-podcast"></i>
          <span> پادکست </span>
        </a>
        <a href="#" className="cat-card">
          <i className="bx bx-book"></i>
          <span> کتاب رایگان </span>
        </a>
        <a href="#" className="cat-card">
          <i className="bx bx-news"></i>
          <span> مجله </span>
        </a>
        <a href="#" className="cat-card">
          <i className="bx bxs-graduation"></i>
          <span> آموزشی </span>
        </a>
      </div>
    </div>
  );
};

export default Category;
