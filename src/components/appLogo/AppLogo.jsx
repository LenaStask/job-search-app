import React from 'react';
import './appLogo.scss';
import logo from '../../assets/logo.svg';

function AppLogo() {
  return (
    <div className="header__logo">
      <a className="header__logo-image" href="/#">
        <img src={logo} alt="Logo" />
      </a>
      <div className="header__app-name">Jobored</div>
    </div>
  );
}

export default AppLogo;
