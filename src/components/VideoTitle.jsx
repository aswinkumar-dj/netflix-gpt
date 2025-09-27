import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] px-14 absolute bg-gradient-to-r from-black ">
      <h1 className="text-3xl  font-extrabold text-white drop-shadow-lg mb-4">
        {title}
      </h1>

      <p className="text-white text-sm  max-w-xl mb-6 line-clamp-3">
        {overview}
      </p>

      <div className="flex space-x-4">
        <button className="bg-orange-400 text-black font-semibold px-6 py-2 rounded hover:bg-orange-400/50 transition">
          ▶ Play
        </button>
        <button className="bg-gray-800 text-white font-semibold px-6 py-2 rounded hover:bg-gray-500 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
