import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Main = ({ myStock, myStockLength, setMyStock }) => {
  // useEffect(() => {
  //   const myStock = localStorage.getItem("myStock");
  //   let myStockArr = JSON.parse(myStock);
  //   setMyStock(myStockArr)
  // }, [setMyStock]);

  return (
    <div>
      <ul>
        {myStockLength === 0
          ? "주식(티커)를 검색하고 추가해보세요"
          : myStock.map((stock) => (
              <li key={stock}>
                <Link to={`/stock/${stock}`}>{stock}</Link>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Main;
