import React from "react";
import "./card.css";

export const Card = ({
  authors,
  cover,
  title,
  date,
  description,
  smallCover,
  extendedView,
  onClick,
}) => {
  return (
    <div
      style={{
        maxWidth: "230px",
        width: "230px",
        margin: "auto",
        marginBottom: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div
        style={{
          marginRight: "15px",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            border: (props) => `1px solid ${props.theme.border.cool}`,
          }}
          src={cover}
        />
      </div>
      <div>
        <h3 className="title"> {title}</h3>
        <h4>{authors?.map((auth) => auth)}</h4>
        <div className="date">{date}</div>
        <p className="description">
          {description
            ? extendedView
              ? description
              : description?.slice(0, 80) + " (...)"
            : ""}
        </p>
      </div>
    </div>
  );
};
