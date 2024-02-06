import React from 'react';
import FoodItem from './FoodItem';
import FoodItems from './FoodItemsObject';

const FoodList = ({ selectedCategory }) => {
  // Filter the food items based on the selected category
  const filteredItems = selectedCategory
    ? FoodItems.filter(item => item.category === selectedCategory)
    : FoodItems;

  return (
    <div className="food-list">
      {filteredItems.map((item, index) => (
        <FoodItem key={index} {...item} />
      ))}
    </div>
  );
};

export default FoodList;
