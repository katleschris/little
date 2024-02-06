import React from 'react';

const FoodItem = ({ name, description, price, photo }) => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns:'repeat(2, 1fr)',
    alignItems: 'center',
    // gap: '10px',
    padding: '5px',
  };

  const leftStyle = {
    marginRight: '20px',
  };

  const imageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="food-item" style={containerStyle}>
      <div className="left" style={leftStyle}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <div className="right" style={imageStyle}>
        <img src={photo} alt={name} style={{ width: '70%', height:'auto'}} />
      </div>
    </div>
  );
};

export default FoodItem;

