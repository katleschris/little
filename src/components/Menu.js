import React from 'react';
import Category from './Category';
import { useState } from 'react';
import FoodList from './FoodList';
import FoodItems from './FoodItemsObject';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ['Specials', 'Lunch', 'Mains', 'Desserts']


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const menuStyle = {
    display: 'flex',
    flexDirection: 'column', // Change to column direction
    alignItems: 'center', // Center items horizontally
    overflowX: 'auto',
  };

  const categoryButtonStyle = {
    marginBottom: '10px', // Add margin between category buttons
  };

  const categoryStyle = {
    display: 'flex',
    overflowX: 'auto'
  }

  return (
    <div className="menu" style={menuStyle}>
        <div className='category' style={categoryStyle}>
        {categories.map((category, index) => (
        <div key={index} style={categoryButtonStyle}>
          <Category categoryName={category} />
        </div>
      ))}
        </div>
      <FoodList foodItems={FoodItems} selectedCategory={selectedCategory} />
    </div>
  );
};

export default Menu;
