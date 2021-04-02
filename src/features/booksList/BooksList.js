import React from "react";
import { Card } from "../card/Card";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCardList, selectCardList } from "./cardListSlice";
import { selectBook, selectCurrentBook } from "../booksList/currentBookSlice";

export const BooksList = () => {
  const cardList = useSelector(selectCardList);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (card) => {
    dispatch(selectBook(card));
    history.push("/book");
  };

  return (
    <div className="container my-5">
      <div className="row">
        {cardList?.map((card) => (
          <div className="col-lg-4 mb-3">
            <Card
              onClick={(e) => handleClick(card)}
              authors={card.authors}
              title={card.title}
              cover={card.cover}
              smallCover={card.smallCover}
              date={card.date}
              description={card.description}
              extendedView={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
