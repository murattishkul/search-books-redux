import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const cardListSlice = createSlice({
  name: "cardList",
  initialState: {
    value: [],
  },
  reducers: {
    setCardList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCardList } = cardListSlice.actions;

export const fetchCardList = createAsyncThunk(
  "cardList/fetchCardList",
  async (value) => {
    const inputValue = value.trim().toLowerCase();

    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=+intitle:${inputValue}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );

    return res?.data?.items?.map((item) => ({
      authors: item?.volumeInfo?.authors,
      title: item?.volumeInfo?.title,
      date: item?.volumeInfo?.publishedDate,
      description: item?.volumeInfo?.description,
      cover: item?.volumeInfo?.imageLinks?.thumbnail,
      smallCover: item?.volumeInfo?.imageLinks?.smallThumbnail,
    }));
  }
);

export const selectCardList = (state) => state.cardList.value;

export default cardListSlice.reducer;
