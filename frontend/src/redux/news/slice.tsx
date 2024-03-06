import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostItem } from "src/components/Post/interface";
import { NewsState } from "./interface";
import { RootState } from "./store";

const initialState: NewsState = {
  value: [],
};

const newsSlice = createSlice({
  name: "reduxNews",
  initialState,
  reducers: {
    addMultipleNewsItems: (state, action: PayloadAction<PostItem[]>) => {
      state.value = action.payload;
    },
  },
});

export const { addMultipleNewsItems } = newsSlice.actions;

export const selectNews = (state: RootState) => {
  return state.reduxNews.value;
};

export default newsSlice.reducer;
