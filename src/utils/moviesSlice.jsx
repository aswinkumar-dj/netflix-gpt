import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRateMovies: null,
    trailerVideos: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRateMovies: (state, action) => {
      state.topRateMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideos,
  addPopularMovies,
  addTopRateMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
