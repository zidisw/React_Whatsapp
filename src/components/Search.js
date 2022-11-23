import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="searchBar">
      <div className="searchLogo">
        <FiSearch />
      </div>
      <input
        type="search"
        placeholder="Search for friends"
        className="searchInput"
      />
    </div>
  );
};

export default Search;
