import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <button className="menu-toggler" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`menu-collapse ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
