import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import movieSlice from "./movieWatchListSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    movie: movieSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
