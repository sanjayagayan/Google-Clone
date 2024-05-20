"use client";

import React from "react";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchIcon from "./Icons/SearchIcon";
import ImageIcon from "./Icons/ImageIcon";
import VoiceIcon from "./Icons/VoiceIcon";
import CloseIcon from "./Icons/CloseIcon";

function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-200 rounded-full shadow-md mt-6 sm:mt-0  sm:px-4 px-6 py-[20px] sm:py-[24px] ml-0 sm:ml-20 max-w-full sm:max-w-[100%] lg:max-w-[60%] max-h-[44px] items-center"
      >
        <div className="flex flex-row  items-center cursor-pointer mr-2">
          <SearchIcon
            className=" text-[#4285f4] cursor-pointer sm:hidden flex"
            width="24px"
            height="24px"
          />
        </div>
        <input
          type="text"
          className="w-full focus:outline-none leading-[22px] mb-[4px] px-2"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <div className="flex flex-row space-x-4 items-center cursor-pointer">
          <button
            className=" border-r-2 border-gray-200"
            onClick={() => setTerm(" ")}
          >
            <CloseIcon
              className=" text-gray-500 cursor-pointer sm:mr-2 mr-2"
              width="24px"
              height="24px"
            />
          </button>
          <VoiceIcon width="24px" height="24px" />
          <ImageIcon width="24px" height="24px" className="hidden sm:flex" />
          <SearchIcon
            className=" text-[#4285f4] cursor-pointer hidden sm:flex"
            width="24px"
            height="24px"
          />
        </div>
      </form>
    </>
  );
}

export default SearchBox;
