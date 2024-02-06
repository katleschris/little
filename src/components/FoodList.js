import React from 'react';
import FoodItem from './FoodItem';

const FoodList = ({ foodItems, selectedCategory }) => {
  // Filter the food items based on the selected category
  const filteredItems = selectedCategory
    ? foodItems.filter(item => item.category === selectedCategory)
    : foodItems;

  return (
    <div className="food-list">
      {filteredItems.map((item, index) => (
        <FoodItem key={index} {...item} />
      ))}
    </div>
  );
};

export default FoodList;
