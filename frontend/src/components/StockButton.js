import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StockButton.css";
const StockButton = ({ stock }) => {
  const navigate = useNavigate();
  const handleStockButtonClick = (e) => {
    navigate(`/${e.target.innerText}`);
  };
  return (
    <div className="stockButton" onClick={handleStockButtonClick}>
      {/* <Link className="stockLink" to={`/${stock}`}> */}
      {/* {stock} */}
      {/* </Link> */}
      {stock}
    </div>
  );
};

export default StockButton;
