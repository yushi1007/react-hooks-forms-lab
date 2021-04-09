import React from "react";

function Filter({ onCategoryChange, onSearchChange }) {

  function handleSearchChange() {
    // we could pass up the whole event object via onSearchChange
    // but passing *only* the value makes the data easier to work with in the parent
    onSearchChange();
  }

  return (
    <div className="Filter">
      <input onChange={handleSearchChange} type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
