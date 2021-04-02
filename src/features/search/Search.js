import React, { useState, useEffect, useRef } from "react";
import Autosuggest from "react-autosuggest";
import { useSelector, useDispatch } from "react-redux";
import { SearchIcon } from "../../components/SearchIcon.js/SearchIcon";
import {
  setCardList,
  fetchCardList,
  selectCardList,
} from "../booksList/cardListSlice";
import {
  fetchSuggestions,
  setSuggestions,
  selectSuggestions,
} from "./suggestionsSlice";
import axios from "axios";
import "./search.css";

export const Search = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const suggestions = useSelector(selectSuggestions);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(fetchBook, value?.length === 0 ? 0 : 500);
    return () => clearTimeout(timer);
  }, [value]);

  const fetchBook = async (name, isSubmit) => {
    if (isSubmit)
      dispatch(fetchCardList(name ? name : value)).then((action) => {
        console.log(action.payload);
        dispatch(setCardList(action.payload));
      });
    else
      dispatch(fetchSuggestions(name ? name : value)).then((action) => {
        console.log(action.payload);
        dispatch(setSuggestions(action.payload));
      });
    console.log("FETCH BOOKS");
    setLoading(false);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const handleSubmit = (e, name) => {
    e.preventDefault();
    fetchBook(name ? name : value, true);
  };

  const renderSuggestion = (suggestion) => (
    <div
      onClick={(e) => {
        setValue(suggestion.name);
        handleSubmit(e, suggestion.name);
      }}
    >
      {suggestion.name}
    </div>
  );

  return (
    <div style={{ margin: "auto", width: "100%" }}>
      <form style={{ display: "flex" }}>
        <Autosuggest
          suggestions={suggestions}
          renderSuggestion={renderSuggestion}
          focusInputOnSuggestionClick={false}
          onSuggestionsFetchRequested={({ value, reason }) => {}}
          onSuggestionsClearRequested={() => dispatch(setSuggestions([]))}
          getSuggestionValue={(suggestion) => suggestion.name}
          inputProps={{
            placeholder: "Enter book title",
            value,
            onChange,
          }}
        />
        <button id="search-button" type="submit" onClick={handleSubmit}>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};
