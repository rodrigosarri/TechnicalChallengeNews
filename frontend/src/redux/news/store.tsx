import { configureStore, combineReducers } from "@reduxjs/toolkit";
import newsReducer from "./slice";

const rootReducer = combineReducers({
  reduxNews: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});