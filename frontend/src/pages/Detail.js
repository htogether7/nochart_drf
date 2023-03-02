import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NewsContainer from "../components/NewsContainer";
import Title from "../components/Title";
import "./Detail.css";
const Detail = ({
  myStock,
  myStockLength,
  setMyStockLength,
  setMyStock,
  symbol,
  setSymbol,
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const [stockData, setStockData] = useState({});
  const [news, setNews] = useState([]);
  const [isInMyStock, setIsInMyStock] = useState(false);
  // console.log(params)
  useEffect(() => {
    if (myStock && myStock.includes(params.symbol)) {
      setIsInMyStock(true);
    } else {
      setIsInMyStock(false);
    }
  }, [myStock, params.symbol]);

  useEffect(() => {
    if (params.symbol) {
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
        )
        .catch((err) => {
          setSymbol("");
          navigate("/");
        });
    }
  }, [params.symbol, setSymbol, navigate]);

  return (
    <section className="detailContainer">
      <Title
        name={stockData.name}
        symbol={stockData.symbol}
        isInMyStock={isInMyStock}
        setIsInMyStock={setIsInMyStock}
        myStockLength={myStockLength}
        setMyStockLength={setMyStockLength}
        setMyStock={setMyStock}
      />
      <NewsContainer stockData={stockData} news={news} />
    </section>
  );
};

export default Detail;
