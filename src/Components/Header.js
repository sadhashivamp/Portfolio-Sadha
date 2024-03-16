import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className="header">
            <a href="#" className="logo">SADHA SHIVAM</a>
            {isMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} className="menu-icon" id="menu-icon" onClick={toggleMenu} />
            ) : (
                <FontAwesomeIcon icon={faBars} className="menu-icon" id="menu-icon" onClick={toggleMenu} />
            )}
            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" className="active" onClick={handleLinkClick}>Home</a>
                <a href="#about" onClick={handleLinkClick}>About</a>
                <a href="#services" onClick={handleLinkClick}>Services</a>
                <a href="#portfolio" onClick={handleLinkClick}>Projects</a>
                <a href="#contact" onClick={handleLinkClick}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;
