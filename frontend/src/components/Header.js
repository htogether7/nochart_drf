import React from "react";
import "./Header.css";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

const Header = ({ searchText, setSearchText }) => {
  const handleClick = () => {
    setSearchText("");
  };
  return (
    <header>
      <h2>
        <Link to="/" onClick={handleClick}>
          노차트
        </Link>
      </h2>
      <ul>
        <li>
          <SearchForm searchText={searchText} setSearchText={setSearchText} />
        </li>
        <li>?</li>
      </ul>
    </header>
  );
};

export default Header;
