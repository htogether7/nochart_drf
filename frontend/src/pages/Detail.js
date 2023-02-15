import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  // console.log(÷)
  const params = useParams();
  const [stockData, setStockData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/stock/${params.symbol.toUpperCase()}`)
      .then((response) => {
        if (response) {
          setStockData(response.data);
        }
      });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api")
  //     .then((response) => setStocks(response.data));
  // }, []);
  //   console.log(params);

  return Object.keys(stockData).length === 0 ? (
    <div>다시 검색해주세요.</div>
  ) : (
    <div>
      <h1>회사명 : {`${stockData.name} (${stockData.symbol})`}</h1>
      <h1>산업 : {stockData.industry}</h1>
    </div>
  );
};

export default Detail;
