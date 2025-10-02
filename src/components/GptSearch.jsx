import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_LOGIN } from "../utils/constant";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img src={BG_LOGIN} alt="bg" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="px-2 sm:px-4">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
