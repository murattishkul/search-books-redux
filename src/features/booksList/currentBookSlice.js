import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const currentBookSlice = createSlice({
  name: "currentBook",
  initialState: {
    value: {},
  },
  reducers: {
    selectBook: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBook } = currentBookSlice.actions;

export const selectCurrentBook = (state) => state.currentBook.value;

export default currentBookSlice.reducer;
