import Link from "next/link";
import React from "react";
import Image from "next/image";

import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";
import GridDotIcon from "./Icons/GridDotIcon";
import SettingIcon from "./Icons/SettingIcon";
import HamburgerIcon from "./Icons/HamburgerIcon";

function SearchHeader() {
  return (
    <>
      <div className="sticky top-0 bg-white">
        <div className="flex flex-col sm:flex-row p-[32px]  items-center sm:justify-between">
          <div className="hidden sm:flex flex-row space-x-2 items-center order-3 sm:mr-4 mb-4 sm:mb-0">
            <SettingIcon />
            <GridDotIcon />
            <button className="bg-[#1a73e8] text-white px-6 py-[6px] font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
              Sign in
            </button>
          </div>

          <Link
            href="/"
            className="order-1 sm:order-none mb-4 sm:mb-0 hidden sm:flex"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
              alt="Google Logo"
              width={120}
              height={100}
              priority
              className="w-[92px] h-[30px] "
            />
          </Link>
          <div className="sm:hidden flex justify-between items-center w-full">
            <div className="flex-none">
              <HamburgerIcon />
            </div>

            <div>
              <Link href="/" className=" flex-grow text-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
                  alt="Google Logo"
                  width={120}
                  height={100}
                  priority
                  className="w-[92px] h-[30px]  mx-auto"
                />
              </Link>
            </div>

            <div className="flex-none sm:hidden">
              <button className="bg-[#1a73e8] text-white px-6 py-[6px] font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
                Sign in
              </button>
            </div>
          </div>

          <div className="flex-1 order-3 sm:order-none w-full justify-start lg:justify-start">
            <SearchBox />
          </div>
        </div>
        <SearchHeaderOptions />
      </div>
    </>
  );
}

export default SearchHeader;
