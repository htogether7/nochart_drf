import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((response) => setStocks(response.data));
  }, []);

  return (
    <div className="App">
      <ul>
        {stocks.map((item) => (
          <div>{item.symbol}</div>
        ))}
      </ul>
    </div>
  );
}

export default App;
