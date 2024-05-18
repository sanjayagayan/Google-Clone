"use client"

import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function HomeSearch() {
  const [input,setInput] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input.trim()) return;
    router.push(`/search/web?searchTerms=${input}`);
  };

  const randomSearch = async (e) => {
    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => data[0]);
    if(!response) return;
    router.push(`/search/web?searchTerms=${response}`);

  }
  

  return (
    <>
        <form 
        onSubmit={handleSubmit}
        className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200
         px-5 py-2.5 rounded-full 
          focus-within:shadow-md hover:shadow-md
           sm:max-w-xl lg:max-w-xl items-center'>
            <AiOutlineSearch className='text-xl
             text-gray-500 mr-3'/>
            <input type='text' className='flex-grow focus: outline-none'
            onChange={(e) =>setInput(e.target.value)}
            />
            <div className='flex flex-row space-x-4 items-center'>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1200px-Google_mic.svg.png" className='w-[14.5px] h-[20px]' width={100} height={20}/>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Google_Lens_Icon.svg/1024px-Google_Lens_Icon.svg.png" className='w-[25px] h-[25px]' width={25} height={25}/>
            </div>
        </form>
        <div className='flex flex-row space-x-3 items-center
         justify-center mt-8 sm:space-x-4'>
            <button className=' bg-[#f8f9fa] rounded-md
            text-sm text-gray-800 hover:ring-gray-200
            focus:outline-none active:ring-gray-300
            hover:shadow-md w-36 h-10 transition-shadow'
            onClick={handleSubmit}>
                Google Search
            </button>
            <button className=' bg-[#f8f9fa] rounded-md
            text-sm text-gray-800 hover:ring-gray-200
            focus:outline-none active:ring-gray-300
            hover:shadow-md w-36 h-10 transition-shadow'
            onClick={randomSearch}>
                I'm Feeling Lucky
            </button>
        </div>
    </>
  )
}

export default HomeSearch