import cardListReducer from "../features/booksList/cardListSlice";
import suggestionsReducer from "../features/search/suggestionsSlice";
import currentBookReducer from "../features/booksList/currentBookSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    cardList: cardListReducer,
    suggestions: suggestionsReducer,
    currentBook: currentBookReducer,
  },
});
