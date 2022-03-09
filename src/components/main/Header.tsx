import Cookies from 'js-cookie';
import React from 'react';
import '../../styles/Header.css';
import { isValidUser } from '../../util/RequestManager';

function logout(ev: React.MouseEvent<HTMLAnchorElement>) {
  Cookies.remove("nickname");
  Cookies.remove("password");
}

function Header() {
  return isValidUser() ? (
    <div className="header">
      <div className="header__section">
        <div className="header__logo"><a href="/" className="header__logo__link">
          S-CODE
        </a></div>
      </div>
      <div className="header__section">
        <div className="header__item"><a href="/chat" className="header__link">
          Chat
        </a></div>
      </div>
      <div className="header__section">
        <div className="header__item"><a href="/profile" className="header__link">
          Profile
        </a></div>
        <div className="header__item">
          <a href="/" className="header__item header__link" onClick={logout}>Logout [DEBUG]</a>
        </div>
      </div>
    </div>
    ) :(
    <div className="header">
      <div className="header__section">
        <div className="header__logo"><a className="header__logo__link" href="/">
          S-CODE
        </a></div>
      </div>
      <div className="header__section">
        <div className="header__item"><a className="header__link" href="/chat">
          Chat
        </a></div>
      </div>
      <div className="header__section">
        <div className="header__item"><a className="header__link" href="/login">
          Login
        </a></div>
        <div className="header__item"><a className="header__link" href="/register">
          Register
        </a></div>
      </div>
    </div>
  );
}

export default Header;
