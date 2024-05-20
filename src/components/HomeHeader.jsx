"use client";

import React, { useState } from "react";
import Link from "next/link";
import GridDotIcon from "./Icons/GridDotIcon";

function HomeHeader() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setShowTooltip(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="flex justify-end p-4 text-sm">
      <div className="flex space-x-4 items-center text-[13px]">
        <Link
          href="https://mail.google.com"
          className="hover:underline font-normal text-[#000000DE]"
        >
          Gmail
        </Link>
        <Link
          href="https://image.google.com"
          className="hover:underline font-normal text-[#000000DE]"
        >
          Images
        </Link>
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex justify-center items-center"
        >
          <GridDotIcon />
          {showTooltip && (
            <div className="absolute bg-black/70 border text-[12px] text-white px-[11px] py-[3px] mt-[75px] rounded-md">
              Google apps
            </div>
          )}
        </button>
        <button className="bg-[#1a73e8] text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default HomeHeader;
