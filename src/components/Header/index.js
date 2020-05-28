import React from 'react';
import { HeaderContainer } from './styles';
import logo from '../../images/logo.svg';

const Header = () => (
  <HeaderContainer>
      <div id="container">
        <img src={logo} alt="adotapet" />
      </div>
  </HeaderContainer>
);

export default Header;
