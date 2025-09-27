import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-14">
      <h1 className="text-3xl  font-extrabold text-black drop-shadow-lg mb-4">
        {title}
      </h1>

      <p className="text-black text-sm  max-w-xl mb-6 line-clamp-3">
        {overview}
      </p>

      <div className="flex space-x-4">
        <button className="bg-orange-400 text-black font-semibold px-6 py-2 rounded hover:bg-orange-300 transition">
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
