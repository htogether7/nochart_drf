import React from "react";
import "./AddButton.css";
const AddButton = ({
  symbol,
  isInMyStock,
  setIsInMyStock,
  myStockLength,
  setMyStockLength,
  setMyStock,
}) => {
  const handleClick = () => {
    if (localStorage.getItem("myStock")) {
      const myStock = localStorage.getItem("myStock");
      let myStockArr = JSON.parse(myStock);

      if (isInMyStock) {
        myStockArr = myStockArr.filter((stock) => stock !== symbol);
        setMyStockLength((prevLength) => prevLength - 1);
      } else {
        myStockArr = myStockArr.concat([symbol]);
        setMyStockLength((prevLength) => prevLength + 1);
      }
      const myStockArrString = JSON.stringify(myStockArr);
      localStorage.setItem("myStock", myStockArrString);
      setMyStock(myStockArr);
    } else {
      const initialMyStockArr = [symbol];
      const initialMyStockArrString = JSON.stringify(initialMyStockArr);
      setMyStockLength(1);
      localStorage.setItem("myStock", initialMyStockArrString);
      setMyStock(initialMyStockArr);
    }
    setIsInMyStock((prev) => (prev ? false : true));
  };
  return (
    <button className="addButton" onClick={handleClick}>
      {isInMyStock ? "-" : "+"}
    </button>
  );
};

export default AddButton;
