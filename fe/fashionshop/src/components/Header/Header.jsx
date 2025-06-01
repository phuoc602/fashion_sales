import React, { useState, useRef } from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchWrapperRef = useRef();
   const navigate = useNavigate(); // hook điều hướng

   const goToProfile = () => {
    navigate('/profile'); // chuyển đến trang profile
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  // Đóng search bar nếu click ngoài cả icon và search bar
  const handleClickOutside = (e) => {
    if (
      searchWrapperRef.current &&
      !searchWrapperRef.current.contains(e.target)
    ) {
      setSearchOpen(false);
    }
  };

  React.useEffect(() => {
    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen]);

  return (
    <header className="header">
      <div className="header__logo">
  <img
    src="image/logoShop.png"
    alt="Logo"
    onClick={() => navigate('/home')}
    style={{ cursor: 'pointer' }}
  />
</div>

      <nav className="header__nav">
        <a href="/home">Trang Chủ</a>
        <a href="/nam">Nam</a>
        <a href="/unisex">Unisex</a>
        <a href="/tre-em">Trẻ em</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/store">Store</a>
      </nav>

      <div className="header__icons" ref={searchWrapperRef}>
        <SearchBar visible={searchOpen} onClose={() => setSearchOpen(false)} />
        <FontAwesomeIcon
          icon={faSearch}
          onClick={toggleSearch}
          className="icon-search"
          title="Tìm kiếm sản phẩm"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleSearch();
          }}
        />
       <FontAwesomeIcon
        icon={faUser}
        onClick={goToProfile}
        className="icon-user"
        title="Trang cá nhân"
      />
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </header>
  );
};

export default Header;
