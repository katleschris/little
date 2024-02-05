import React from 'react';
import Nav from './Nav';
import Logo from '../icons_assets/Logo .svg';
import Basket from '../icons_assets/Basket.svg';
import HamburgerIcon from '../icons_assets/HamburgerIcon.svg';

export default function Header() {
  return (
    <header>
      <img src={HamburgerIcon} alt='navigation Icon' />
      <img src={Logo} alt='Little Lemon Logo' />
      <img src={Basket} alt='cart' />
    </header>
  );
}
