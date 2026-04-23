import React, { useState } from "react";
import "./Navbar.css";
import menuIcon from "../../assets/menu-icon.png";
import logo from "../../assets/logo.png"; // your new logo
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo-container">
                <img src={logo} alt="Vertex Smelting" className="logo" />
                <h2 className="brand-name">Vertex Smelting Company</h2>
            </div>
            {/* Desktop Menu */}
            <ul className="desktop-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/refinery">Refinery</Link></li>
                <li><Link to="/consultancy">Consultancy</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact" className="contact-btn">Contact</Link></li>
            </ul>

            {/* Hamburger */}
            <div className="hamburger" onClick={toggleMenu}>
                <img src={menuIcon} alt="Menu" />
            </div>

            {/* Mobile Menu */}
            <ul className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/refinery" onClick={closeMenu}>Refinery</Link></li>
                <li><Link to="/consultancy" onClick={closeMenu}>Consultancy</Link></li>
                <li><Link to="/news" onClick={closeMenu}>News</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>

            {/* Overlay */}
            {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        </nav>
    );
};

export default Navbar;