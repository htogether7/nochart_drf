import React from "react";
import NewsCard from "./NewsCard";

const NewsContainer = ({ news }) => {
  return (
    <ul>
      {news.map((card) => (
        <NewsCard
          title={card.title}
          author={card.author}
          link={card.link}
          key={card.article_id}
        />
      ))}
    </ul>
  );
};

export default NewsContainer;
