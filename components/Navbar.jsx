"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <h1>Sélène</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="nav-desktop">
          <ul className="nav-links">
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#Products">Products</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#testimonial">Testimonials</a>
            </li>
          </ul>
          <a href="#newsletter" className="nav-button">
            Subscribe
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          <li>
            <a href="#header" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#benefits" onClick={toggleMenu}>
              Benefits
            </a>
          </li>
          <li>
            <a href="#Products" onClick={toggleMenu}>
              Products
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#testimonial" onClick={toggleMenu}>
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#newsletter"
              className="nav-button mobile-btn"
              onClick={toggleMenu}
            >
              Subscribe
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
