import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from 'next/image';
import React from "react";

function page() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
          alt="Google Logo"
          width={300}
          height={100}
          className="w-[272px] h-[92px]"
        />
        <HomeSearch/>
      </div>
    </>
  );
}

export default page;
