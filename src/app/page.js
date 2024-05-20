import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from 'next/image';
import React from "react";

const Page = () => (
  <>
    <HomeHeader />
    <div className="flex flex-col items-center mt-[88px]">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
        alt="Google Logo"
        width={300}
        height={100}
        className="w-[250px] h-[85px] sm:w-[272px] sm:h-[92px]"
        priority
      />
      <HomeSearch />
    </div>
  </>
);

export default Page;
