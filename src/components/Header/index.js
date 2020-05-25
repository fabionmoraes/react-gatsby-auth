import React from 'react';
import { Link } from 'gatsby';
import { HeaderContainer } from './styles';

const Header = () => (
  <HeaderContainer>
    <div className="header__wrap">
      <h1 className="header__heading">
        <Link
          to="/"
          className="header__link header__link--home"
        >
          Logomarca
        </Link>
      </h1>
      <nav role="main" className="header__nav">
        <Link to="/" className="header__link">
          Home
        </Link>
        <Link to="/app/profile" className="header__link">
          Profile
        </Link>
        <Link to="/app/details" className="header__link">
          Details
        </Link>
      </nav>
    </div>
    </HeaderContainer>
);

export default Header;
