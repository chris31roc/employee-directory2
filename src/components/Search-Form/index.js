import React from "react";
import "./style.css";

function SearchForm({ onSearch, searchTerm }) {
  
  return (
    <form>
      <div className="form-group">
      <label htmlFor="search">Search for an Employee: </label>
        <input
          onChange={onSearch}
          value={searchTerm}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by name "
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;