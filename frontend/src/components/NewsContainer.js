import React from "react";
import NewsCard from "./NewsCard";
import "./NewsContainer.css";

const NewsContainer = ({ news }) => {
  return (
    <article className="newsContainer">
      <ul>
        {news.length > 0 ? (
          news.map((card) => (
            <NewsCard
              title={card.title}
              author={card.author}
              link={card.link}
              key={card.article_id}
            />
          ))
        ) : (
          <div>뉴스가 없습니다.</div>
        )}
      </ul>
    </article>
  );
};

export default NewsContainer;
