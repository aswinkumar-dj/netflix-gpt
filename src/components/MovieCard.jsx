import React from "react";
import { POSTER_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div
      className="w-40 cursor-pointer transform transition duration-300 
                 hover:scale-110 hover:z-10"
    >
      <img
        alt="movie-poster"
        src={POSTER_CDN + posterPath}
        className="rounded-md shadow-md hover:shadow-xl"
      />
    </div>
  );
};

export default MovieCard;
