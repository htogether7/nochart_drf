import React from "react";
import "./Header.css";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

const Header = ({ searchText, setSearchText, setSymbol }) => {
  const handleClick = () => {
    setSearchText("");
    setSymbol("")
  };
  return (
    <header>
      <h2>
        <Link to="/" onClick={handleClick}>
          노차트
        </Link>
      </h2>
      <SearchForm searchText={searchText} setSearchText={setSearchText} setSymbol={setSymbol}/>

    </header>
  );
};

export default Header;
