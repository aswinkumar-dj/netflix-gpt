import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VIdeoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[19];

  console.log(mainMovie);
  const { title, overview } = mainMovie;
  return (
    <div>
      <VideoBackground title={title} overview={overview} />
      <VideoTitle />
    </div>
  );
};

export default MainContainer;
