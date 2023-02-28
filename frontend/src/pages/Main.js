import React from "react";
import MainContainer from "../components/MainContainer";
const Main = ({
  myStock,
  myStockLength,
  setMyStock,
  setMyStockLength,
  symbol,
  setSymbol,
}) => {
  // useEffect(() => {
  //   const myStock = localStorage.getItem("myStock");
  //   let myStockArr = JSON.parse(myStock);
  //   setMyStock(myStockArr)
  // }, [setMyStock]);

  // useEffect(() => {}, [])

  return (
    <MainContainer
      myStock={myStock}
      myStockLength={myStockLength}
      setMyStockLength={setMyStockLength}
      setMyStock={setMyStock}
      symbol={symbol}
      setSymbol={setSymbol}
    />
  );
};

export default Main;
