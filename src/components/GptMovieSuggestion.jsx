import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((state) => state.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black/60 rounded-lg shadow-md text-white">
      <div>
        {movieNames.map((moviesName, index) => (
          <MovieList
            key={index}
            title={moviesName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
