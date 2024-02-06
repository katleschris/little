import React from 'react';

const Category = ({ categoryName }) => {

    const categoryStyle = {
        display: 'flex',
        overflowX: 'auto',
        marginRight: '10px',
        borderRadius: '30%',
    }

  return (
    <button className="category-button" style={categoryStyle}>
      {categoryName}
    </button>
  );
};

export default Category;
