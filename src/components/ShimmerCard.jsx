import React from "react";

const ShimmerCard = () => {
  return (
    <div className="flex space-x-3 overflow-hidden">
      {Array(6)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="w-28 sm:w-32 md:w-40 h-40 sm:h-52 md:h-60 rounded-md bg-gray-800 animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default ShimmerCard;
