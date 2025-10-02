import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className="-mt-50 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      </div>
      <MovieList title="Popular Movies" movies={movies.popularMovies} />
      <MovieList title="Top Rated" movies={movies.topRateMovies} />
      <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
