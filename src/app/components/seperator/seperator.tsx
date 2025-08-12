"use client";

import "./seperator.css";
import Link from "next/link";
import React, { useRef, useState } from "react";

function Seperator(props:any) {
  return (
    <div className="section">
      <div className="flex-header">
        <div className="flex-header-content">
          <h3 className="flex-header-title">{props.title}</h3>
          <div className="flex-header-seperator"></div>
          <div className={`flex-header-more ${props.moreBtn}`}>
            مشاهده همه
            <i className="bx bx-chevron-left"></i>
          </div>
        </div>
        <div className="flex-header-subtitle">{props.offPercant}</div>
      </div>
    </div>
  );
};

export default Seperator;
