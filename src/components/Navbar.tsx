'use client';

import { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function Navbar({ isDarkMode, onThemeToggle }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">Shreya Singh</div>
      
      <input 
        type="checkbox" 
        id="menu-toggle" 
        className="menu-toggle" 
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <button 
        onClick={onThemeToggle}
        className="theme-toggle-btn"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </button>
    </header>
  );
}
