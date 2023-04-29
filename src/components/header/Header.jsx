import React from 'react';
import './header.scss';
import '../../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import Menu from '../menu/Menu';
import AppLogo from '../appLogo/AppLogo';

function Header() {
  return (
    <div className="header">
      <AppLogo />
      <Menu />
    </div>
  );
}

export default Header;
