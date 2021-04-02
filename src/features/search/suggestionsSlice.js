import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState: {
    value: [],
  },
  reducers: {
    setSuggestions: (state, action) => {
      if (action.payload) state.value = action.payload;
    },
  },
});

export const { setSuggestions } = suggestionsSlice.actions;

export const selectSuggestions = (state) => state.suggestions.value;

export const fetchSuggestions = createAsyncThunk(
  "suggestions/fetchSuggestions",
  async (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=+intitle:${inputValue}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );

    console.log(
      inputLength === 0
        ? []
        : res?.data?.items
            ?.filter(
              (item) =>
                item.volumeInfo.title.toLowerCase().slice(0, inputLength) ===
                inputValue
            )
            .map((item) => ({ name: item.volumeInfo.title }))
    );

    return inputLength === 0
      ? []
      : res?.data?.items
          ?.filter(
            (item) =>
              item.volumeInfo.title.toLowerCase().slice(0, inputLength) ===
              inputValue
          )
          .map((item) => ({ name: item.volumeInfo.title }));
  }
);

export default suggestionsSlice.reducer;
