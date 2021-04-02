import React, { useState } from "react";
import { Search } from "../search/Search";

export const Header = () => {
  return (
    <div
      style={{ marginBottom: "50px" }}
      className="main-image d-flex justify-content-center align-items-center flex-column"
    >
      <div className="filter"></div>
      <h2
        className="display-2 text-center text-white mb-3"
        style={{ zIndex: 2 }}
      >
        Search for your next favorite book
      </h2>
      <div style={{ width: "37%", zIndex: 2 }}>
        <Search />
      </div>
    </div>
  );
};
