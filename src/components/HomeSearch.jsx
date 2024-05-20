"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CloseIcon from "./Icons/CloseIcon";
import SearchIcon from "./Icons/SearchIcon";
import VoiceIcon from "./Icons/VoiceIcon";
import ImageIcon from "./Icons/ImageIcon";

function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [googleMicTooltip, setGoogleMicTooltip] = useState(false);
  const [googleLensTooltip, setGoogleLensTooltip] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);

    if (response) {
      router.push(`/search/web?searchTerm=${response}`);
    }
    setRandomSearchLoading(false);
  };

  const handleMouseEnter = () => {
    setTimeout(() => {
      if (!isInputFocused) setShowTooltip(true);
    }, 1000);
  };

  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleClearInput = () => {
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[92%] border border-gray-200 px-4 py-2.5 rounded-full hover:shadow-custom-md sm:max-w-xl lg:max-w-xl justify-between items-center"
      >
        <div className="flex w-[80%]">
          <SearchIcon className="text-xl text-gray-400 mr-3 w-[21px] h-[21px]" />
          <input
            type="text"
            value={input}
            className="flex focus:outline-none "
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {showTooltip && !isInputFocused && (
            <div
              className="absolute bg-black border text-[11px] text-[#fff]/80 px-[9px] py-[4px] mt-3 ml-2"
              style={{ top: tooltipPosition.y + 5, left: tooltipPosition.x }}
            >
              Search
            </div>
          )}
        </div>
        {input && (
          <button
            type="button"
            className="border-r-2 border-gray-200"
            onClick={handleClearInput}
          >
            <CloseIcon
              className="text-gray-500 cursor-pointer sm:mr-4 mr-2"
              width="24px"
              height="24px"
            />
          </button>
        )}
        <div className="ml-4 flex space-x-4 items-center">
          <button
            type="button"
            onMouseEnter={() => setGoogleMicTooltip(true)}
            onMouseLeave={() => setGoogleMicTooltip(false)}
            className="flex flex-col items-center"
          >
            <VoiceIcon className="w-[24px] h-[24px]" />
            {googleMicTooltip && (
              <div className="absolute bg-[#2d2d2d] border-2 border-white shadow-2xl text-[11px] text-[#fff] px-[11px] font-bold mt-[40px] py-[6px]">
                Search by voice
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-[5px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-b-[#2d2d2d] border-l-transparent border-r-transparent"></div>
              </div>
            )}
          </button>
          <button
            type="button"
            onMouseEnter={() => setGoogleLensTooltip(true)}
            onMouseLeave={() => setGoogleLensTooltip(false)}
            className="flex flex-col items-center"
          >
            <ImageIcon className="w-[24px] h-[24px]" />
            {googleLensTooltip && (
              <div className="absolute bg-[#2d2d2d] border-2 border-white shadow-2xl text-[11px] font-bold text-[#fff] px-[11px] mt-[40px] py-[6px]">
                Search by image
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-[5px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-b-[#2d2d2d] border-l-transparent border-r-transparent"></div>
              </div>
            )}
          </button>
        </div>
      </form>
      <div className="flex flex-row space-x-3 items-center justify-center mt-8 sm:space-x-4">
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-sm w-36 h-10 hover:border-[1.4px] hover:border-gray-300"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-sm w-36 h-10 hover:border-[1.4px] hover:border-gray-300"
          onClick={randomSearch}
        >
          {randomSearchLoading ? "Loading..." : `I'm Feeling Lucky`}
        </button>
      </div>
      <div className="text-[13px] mt-5 flex space-x-3 justify-center items-center">
        <p>Google offered in:</p>
        <a href="#" className="text-[#1a0dab] hover:underline">
          සිංහල
        </a>
        <a href="#" className="text-[#1a0dab] hover:underline">
          தமிழ்
        </a>
      </div>
    </>
  );
}

export default HomeSearch;
