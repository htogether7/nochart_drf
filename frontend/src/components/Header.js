import React from "react";
import "./Header.css";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>
        <Link to="/">노차트</Link>
      </h2>
      <ul>
        <li>
          <SearchForm />
        </li>
        <li>?</li>
      </ul>
    </header>
  );
};

export default Header;
