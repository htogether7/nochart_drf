import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  // console.log(÷)
  const params = useParams();
  const [stockData, setStockData] = useState({});
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .all([
        axios.get(
          `http://localhost:8000/api/stock/${params.symbol.toUpperCase()}`
        ),
        axios.get(
          `http://localhost:8000/api/news/${params.symbol.toUpperCase()}`
        ),
      ])
      .then(
        axios.spread((stock, news) => {
          if (stock) {
            setStockData(stock.data);
            setNews(news.data);
          }
        })
      );
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api")
  //     .then((response) => setStocks(response.data));
  // }, []);
  //   console.log(params);

  return Object.keys(stockData).length === 0 ? (
    <h1>다시 검색해주세요.</h1>
  ) : (
    <div>
      <h1>{`${stockData.name} (${stockData.symbol})`}</h1>
    </div>
  );
};

export default Detail;
