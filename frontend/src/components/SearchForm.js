import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ searchText, setSearchText, setSymbol }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    setSymbol(searchText.toUpperCase());
    navigate(`/${searchText.toUpperCase()}`);
    // e.preventDefault();
    // console.log("submit!");
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={searchText}
        placeholder="티커를 입력하세요"
      ></input>
      <button type="submit">검색</button>
    </form>
  );
};

export default SearchForm;
