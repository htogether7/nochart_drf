import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewsContainer from "../components/NewsContainer";
import Title from "../components/Title";
const Detail = ({ myStock, myStockLength, setMyStockLength }) => {
  // console.log(÷)
  const params = useParams();
  const [stockData, setStockData] = useState({});
  const [news, setNews] = useState([]);
  const [isInMyStock, setIsInMyStock] = useState(false);

  useEffect(() => {
    if (myStock && myStock.includes(params.symbol)) {
      setIsInMyStock(true);
    }
  }, [myStock, params.symbol]);

  useEffect(() => {
    axios
      .all([
        axios.get(
          `https://htogether7.pythonanywhere.com/api/stock/${params.symbol.toUpperCase()}`
        ),
        axios.get(
          `https://htogether7.pythonanywhere.com/api/news/${params.symbol.toUpperCase()}`
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
  }, [params.symbol]);
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
      <Title
        name={stockData.name}
        symbol={stockData.symbol}
        isInMyStock={isInMyStock}
        setIsInMyStock={setIsInMyStock}
        myStockLength={myStockLength}
        setMyStockLength={setMyStockLength}
      />
      <NewsContainer stockData={stockData} news={news} />
    </div>
  );
};

export default Detail;
