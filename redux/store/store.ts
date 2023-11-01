import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counter/counter";
import dropDownSlice from "../slice/counter/dropDown";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dropDownReducer: dropDownSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
