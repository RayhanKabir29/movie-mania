import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    watchList: [],
  },
  reducers: {
    addMovieToWatchList(state: any, action) {
      state.watchList.push(action.payload);
    },
  },
});
export const { addMovieToWatchList } = movieSlice.actions;
export default movieSlice.reducer;
