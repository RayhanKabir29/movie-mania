import { createSlice } from "@reduxjs/toolkit";
interface IMovie {
  title?: string;
  id?: number;
  overview?: string;
  release_dat?: string;
  vote_average: number;
}

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    watchList: [],
  },
  reducers: {
    addMovieToWatchList(state: any, action) {
      const match = state?.watchList?.filter(
        (item: IMovie) => item?.id === action?.payload?.id
      );
      if (!match?.length) {
        state.watchList.push(action.payload);
      }
    },
  },
});
export const { addMovieToWatchList } = movieSlice.actions;
export default movieSlice.reducer;
