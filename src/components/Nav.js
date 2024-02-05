import React from 'react';

export default function Nav({ isVisible }) {
  const navStyle = {
    display: isVisible ? 'block' : 'none',
    position: 'absolute',
    top: '100%', // Position the dropdown below the nav bar
    left: 0,
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    listStyle: 'none',
    margin: 0,
  };

  return (
    <ul style={navStyle}>
      <li>Home</li>
      <li>Specials</li>
      <li>About</li>
      <li>Book</li>
    </ul>
  );
}

