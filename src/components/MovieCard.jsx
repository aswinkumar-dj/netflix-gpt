import React from "react";
import { POSTER_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 hover:animate-pulse">
      <img alt="movie-poster" src={POSTER_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
