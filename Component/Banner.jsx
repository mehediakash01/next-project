import React from "react";



const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh]">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src="/heroImg.png" alt="heroImg" />
        <div>
          <h1  className="text-5xl font-bold mb-5">
            Books to<span  > freshen </span>up <br /> your bookshelf
          </h1>

          <button className="btn btn-success text-white font-semibold">
            View the List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
