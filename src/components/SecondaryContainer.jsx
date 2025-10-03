import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black ">
      <div className="mt-50 sm:-mt-40 md:-mt-50 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      </div>
      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRateMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
