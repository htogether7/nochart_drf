import React from "react";
import "./AddButton.css";
const AddButton = ({ symbol, isInMyStock, setIsInMyStock }) => {
  const handleClick = () => {
    if (localStorage.getItem("myStock")) {
      const myStock = localStorage.getItem("myStock");
      let myStockArr = JSON.parse(myStock);

      if (isInMyStock) {
        myStockArr = myStockArr.filter((stock) => stock !== symbol);
      } else {
        myStockArr.push(symbol);
      }
      const myStockArrString = JSON.stringify(myStockArr);
      localStorage.setItem("myStock", myStockArrString);
    } else {
      const initialMyStockArr = [symbol];
      const initialMyStockArrString = JSON.stringify(initialMyStockArr);
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
