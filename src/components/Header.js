import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <img src='logo-red.png' alt='logo'></img>
        <ul className='header__nav-list' >
          <li className='header__nav-item'><Link to="/">Accueil</Link></li>
          <li className='header__nav-item'><Link to="/about">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;