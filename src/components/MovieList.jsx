import React from "react";
import MovieCard from "./MovieCard";
import ShimmerCard from "./ShimmerCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl font-bold mb-4 ml-3 text-white">{title}</h1>

      <div className="relative ">
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="snap-start shrink-0">
                <MovieCard
                  posterPath={movie.poster_path}
                  className="transform transition duration-300 hover:scale-105"
                />
              </div>
            ))
          ) : (
            <ShimmerCard />
          )}
        </div>

        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default MovieList;
