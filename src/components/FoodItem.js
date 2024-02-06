import React from 'react';

const FoodItem = ({ name, description, price, photo }) => {
  return (
    <div className="food-item">
      <div className="left">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <div className="right">
        <img src={photo} alt={name} />
      </div>
    </div>
  );
};

export default FoodItem;
