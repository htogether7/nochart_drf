import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import axios from "axios";
import Header from "./components/Header";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
function App() {
  // const [stocks, setStocks] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stock/:symbol" element={<Detail />} />
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
