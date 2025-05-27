import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="logoShop.png"/>
      </div>
      <nav className="header__nav">
        <a href="/">Trang Chủ</a>
        <a href="/nam">Nam</a>
        <a href="/unisex">Unisex</a>
        <a href="/tre-em">Trẻ em</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/store">Store</a>
      </nav>
      <div className="header__icons">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </header>
  );
};

export default Header;
