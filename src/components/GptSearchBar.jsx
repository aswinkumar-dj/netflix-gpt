import React, { useRef } from "react";
import openai from "../utils/openaiasst";
import client from "../utils/openaiasst";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResults } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation engine based on the query" +
      searchText.current.value +
      ". Provide a list of 5 movies with their titles only. comma separated. Example Result: Leo, Coolie, Don, Madharasi, House mates";
    const response = await client.responses.create({
      model: "openai/gpt-oss-20b",
      input: gptQuery,
    });
    const gptMovies = response?.output_text.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[70%] sm:pt-[15%] flex justify-center px-4">
      <form
        className="bg-black/60 w-full sm:w-3/4 md:w-1/2 py-4 px-4 grid grid-cols-1 sm:grid-cols-12 gap-3 rounded-lg shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like to watch today?"
          className="col-span-1 sm:col-span-10 px-4 py-2 rounded-md outline-none bg-white text-black w-full"
        />
        <button
          type="submit"
          className="col-span-1 sm:col-span-2 bg-orange-400 text-black rounded-md hover:bg-orange-500 transition py-2 px-4 w-full"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
