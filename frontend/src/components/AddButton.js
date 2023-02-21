import React from "react";
import "./AddButton.css";
const AddButton = ({
  symbol,
  isInMyStock,
  setIsInMyStock,
  myStockLength,
  setMyStockLength,
}) => {
  const handleClick = () => {
    if (localStorage.getItem("myStock")) {
      const myStock = localStorage.getItem("myStock");
      let myStockArr = JSON.parse(myStock);

      if (isInMyStock) {
        myStockArr = myStockArr.filter((stock) => stock !== symbol);
        setMyStockLength((prevLength) => prevLength - 1);
      } else {
        myStockArr.push(symbol);
        setMyStockLength((prevLength) => prevLength + 1);
      }
      const myStockArrString = JSON.stringify(myStockArr);
      localStorage.setItem("myStock", myStockArrString);
    } else {
      const initialMyStockArr = [symbol];
      const initialMyStockArrString = JSON.stringify(initialMyStockArr);
      setMyStockLength(1);
      localStorage.setItem("myStock", initialMyStockArrString);
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
