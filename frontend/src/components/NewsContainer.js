import React from "react";
import NewsCard from "./NewsCard";
import './NewsContainer.css';

const NewsContainer = ({ news }) => {
  return (
    <div className='newsContainer'>
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
    </div>
  );
};

export default NewsContainer;
