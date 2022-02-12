import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__section">
        <div className="header__item"><a href="#">
          Profile
        </a></div>
        <div className="header__item"><a href="#">
          Settings
        </a></div>
      </div>
      <div className="header__section">
        <div className="header__item"><a href="#">
          User
        </a></div>
      </div>
    </div>
  );
}

export default Header;
