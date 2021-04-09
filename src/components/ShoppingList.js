import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onAddItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch (e) {
    setSearchText(e.target.value)
  }

  const itemsToDisplay = items
  
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
  
  .filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
    
  return (
    <div className="ShoppingList">
      <ItemForm onAddItem={onAddItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
