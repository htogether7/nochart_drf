import React from "react";
import AddButton from "./AddButton";
import "./Title.css";

const Title = ({
  name,
  symbol,
  isInMyStock,
  setIsInMyStock,
  myStockLength,
  setMyStockLength,
  setMyStock
}) => {
  return (
    <div className="titleContainer">
      <div>
        <h1>
          {symbol}({name})
        </h1>
      </div>
      <AddButton
        symbol={symbol}
        isInMyStock={isInMyStock}
        setIsInMyStock={setIsInMyStock}
        myStockLength={myStockLength}
        setMyStockLength={setMyStockLength}
        setMyStock={setMyStock}
      />
    </div>
  );
};

export default Title;
