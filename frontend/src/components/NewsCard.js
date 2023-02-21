import React from "react";
import "./NewsCard.css";

const NewsCard = ({ title, author, link }) => {
  return (
    <div className="newsCard">
      <h2>{title}</h2>
      <div className="infoCard">
        <div>{author}</div>
        <div>
          <a className="newsLink" href={link} rel="noreferrer" target="_blank">
            Investing.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
