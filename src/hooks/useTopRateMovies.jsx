import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRateMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRateMovies = () => {
  const dispatch = useDispatch();
  const getTopRateMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopRateMovies(json.results));
  };
  useEffect(() => {
    getTopRateMovies();
  }, []);
};

export default useTopRateMovies;
