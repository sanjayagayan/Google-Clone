import React from "react";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";
import Image from 'next/image'


function ImageSearchResults({ results }) {
  return (
    <div className="sm:pb-24 pb-40 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-3 space-x-4">
        {results.items.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <Link href={result.image.contextLink}>
                <Image
                  src={result.link}
                  alt={result.title}
                  className="h-52 group-hover:shadow-xl w-full object-contain transition-shadow duration-300"
                  width={100}
                  height={100}
                  priority
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="group-hover:underline truncate text-gray-600">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}

export default ImageSearchResults;