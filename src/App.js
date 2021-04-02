import React, { useEffect, useState } from "react";
import { BooksList } from "./features/booksList/BooksList";
import { Header } from "./features/header/Header";
import { SelectedCard } from "./features/card/SelectedCard";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/book">
          <SelectedCard />
        </Route>
        <Route path="/">
          <>
            <Header />
            <BooksList />
          </>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
