import React from "react";
import "./MyStock.css";
import StockButton from "./StockButton";

const MyStock = ({ myStock, myStockLength }) => {
  return (
    <div className="stockList">
      <div>내 주식</div>
      <ul>
        {myStockLength === 0
          ? "주식을 추가해 주세요"
          : myStock.map((stock) => (
              <li key={stock}>
                <StockButton stock={stock} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default MyStock;
