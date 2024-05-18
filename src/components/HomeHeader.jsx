import React from "react";
import { TbGridDots } from "react-icons/tb";
import Link from "next/link";

function HomeHeader() {
  return (
    <div className="flex justify-end p-4 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"https://image.google.com"} className="hover:underline">
          Images
        </Link>
        <TbGridDots className=" bg-transparent hover:bg-gray-100 rounded-full text-[42px] p-[9px] text-[#3c4043] cursor-pointer" />
        <button className="bg-[#1a73e8] text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign in</button>
      </div>
    </div>
  );
}

export default HomeHeader;
