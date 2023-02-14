import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <h2>
        <a href="/">노차트</a>
      </h2>
      <ul>
        <li>
          <form>
            <input></input>
            <button type="submit">검색</button>
          </form>
        </li>
        <li>?</li>
      </ul>
    </header>
  );
};

export default Header;
