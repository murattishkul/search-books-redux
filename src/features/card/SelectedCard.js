import React from "react";
import { Card } from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { selectBook, selectCurrentBook } from "../booksList/currentBookSlice";

export const SelectedCard = () => {
  const currentBook = useSelector(selectCurrentBook);
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <Card
        authors={currentBook.authors}
        title={currentBook.title}
        cover={currentBook.cover}
        smallCover={currentBook.smallCover}
        date={currentBook.date}
        description={currentBook.description}
        actions={currentBook?.actions}
        extendedView={true}
      />
    </div>
  );
};
