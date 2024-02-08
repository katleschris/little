import React, { useState } from 'react';
import Nav from './Nav';
import Logo from '../icons_assets/Logo.svg';
import Basket from '../icons_assets/Basket.svg';
import HamburgerIcon from '../icons_assets/HamburgerIcon.svg';

export default function Header() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  const hideMenu = () => {
    setMenuVisibility(false); // Function to hide the menu
  };
  const headerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    alignItems: 'center',
    padding: '10px',
    position: 'relative', // Position relative for absolute positioning of the dropdown
  };

  const basketStyle = {
    justifySelf: 'end',
  };

  return (
    <header style={headerStyle}>
      <img src={HamburgerIcon} alt='navigation Icon' onClick={toggleMenu} />
      <img src={Logo} alt='Little Lemon Logo' />
      <img src={Basket} alt='cart' style={basketStyle} />
      
      <Nav isVisible={isMenuVisible} hideMenu={hideMenu}/>
    </header>
  );
}
