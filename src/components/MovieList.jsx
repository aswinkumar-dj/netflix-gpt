import React from "react";
import MovieCard from "./MovieCard";
import ShimmerCard from "./ShimmerCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 sm:px-6 py-3 sm:py-4">
      <h1 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 ml-2 sm:ml-3 text-white">
        {title}
      </h1>

      <div className="relative">
        <div className="flex overflow-x-auto space-x-3 sm:space-x-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="snap-start shrink-0">
                <MovieCard
                  posterPath={movie.poster_path}
                  className="w-28 sm:w-36 md:w-44 transform transition duration-300 hover:scale-105"
                />
              </div>
            ))
          ) : (
            <ShimmerCard />
          )}
        </div>

        <div className="absolute inset-y-0 left-0 w-6 sm:w-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-6 sm:w-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default MovieList;
