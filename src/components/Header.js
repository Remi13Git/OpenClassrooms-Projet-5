import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.scss';

const Header = () => {
  const location = useLocation();
    return (
      <header className='header'>
        <nav className='header__nav'>
          <img src='../logo-red.png' alt='logo'></img>
          <ul className='header__nav-list'>
            <li className={`header__nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">Accueil</Link>
            </li>
            <li className={`header__nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link to="/about">A Propos</Link>
            </li>
        </ul>
        </nav>
      </header>
    );
};

export default Header;