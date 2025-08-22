import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh]">
      <div className="flex  flex-col lg:flex-row gap-8">
        {/* Image on the left */}
        <img
          src="/heroImg.png"
          alt="heroImg"
          className="w-full lg:w-1/2 "
        />

        {/* Text on the right */}
        <div className="text-center lg:text-left flex flex-col justify-center lg:pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Books to <span className="text-green-600">freshen</span> up <br /> 
            your bookshelf
          </h1>

          <p className="mb-6 text-lg text-gray-700">
            Discover, explore, and enjoy a wide selection of books for every reader.
          </p>

          <Link href={'/product'}>
            <button className="btn btn-success text-white font-semibold w-full md:w-auto">
              View the List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
