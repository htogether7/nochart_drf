import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import axios from "axios";
import Header from "./components/Header";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
function App() {
  // const [stocks, setStocks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [myStock, setMyStock] = useState([]);
  const [myStockLength, setMyStockLength] = useState(0);

  useEffect(() => {
    const initialMyStock = localStorage.getItem("myStock");
    const initialMyStockArr = JSON.parse(initialMyStock);
    setMyStock(initialMyStockArr);
    if (myStock) {
      setMyStockLength(myStock.length);
    }
  }, []);

  return (
    <div className="App">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route
          path="/"
          element={<Main myStock={myStock} myStockLength={myStockLength} />}
        />
        <Route
          path="/stock/:symbol"
          element={
            <Detail
              myStock={myStock}
              myStockLength={myStockLength}
              setMyStockLength={setMyStockLength}
            />
          }
        />
      </Routes>
      {/* <ul>
        {stocks.map((item) => (
          <div>{item.symbol}</div>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
