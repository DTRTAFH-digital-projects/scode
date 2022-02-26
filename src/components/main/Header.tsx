import '../../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__section">
        <div className="header__item header__logo"><a className="header__logo__link" href="/">
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
