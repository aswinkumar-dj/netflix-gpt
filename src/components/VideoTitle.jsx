import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[40%] sm:pt-[28%] px-4 sm:px-10 md:px-14 absolute bg-gradient-to-r from-black">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg mb-3 sm:mb-4">
        {title}
      </h1>

      <p className="text-white text-xs sm:text-sm md:text-base max-w-md sm:max-w-xl mb-4 sm:mb-6 line-clamp-3">
        {overview}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button className="bg-orange-400 text-black font-semibold px-4 sm:px-6 py-2 rounded hover:bg-orange-400/50 transition">
          ▶ Play
        </button>
        <button className="bg-gray-800 text-white font-semibold px-4 sm:px-6 py-2 rounded hover:bg-gray-500 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
