import React from 'react';

const Category = ({ categoryName }) => {

    const categoryStyle = {
        display: 'flex',
        overflowX: 'auto',
        marginRight: '10px',
        borderRadius: '30%',
        border: 'none'
    }

  return (
    <button className="category-button" style={categoryStyle}>
      {categoryName}
    </button>
  );
};

export default Category;
