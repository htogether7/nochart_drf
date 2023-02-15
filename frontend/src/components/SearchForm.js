import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = () => {
    navigate(`/stock/${searchText.toUpperCase()}`);
    // e.preventDefault();
    // console.log("submit!");
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange}></input>
      <button type="submit">검색</button>
    </form>
  );
};

export default SearchForm;
