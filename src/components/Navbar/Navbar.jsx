import React, { useState } from 'react';
import './Navbar.css';
import { ShoppingCart, Menu, X } from 'lucide-react';

const LOGO_IMG = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=120&h=120&q=80';

const Navbar = ({ cartCount, openCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="glass-nav">
      <div className="logo">
        <img src={LOGO_IMG} alt="CraveBite logo" className="logo-img" />
        <span className="logo-text">Crave<span>Bite</span></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#home" onClick={close}>Home</a></li>
        <li><a href="#menu" onClick={close}>Menu</a></li>
        <li><a href="#deals" onClick={close}>Offers</a></li>
      </ul>
      <div className="nav-actions">
        <button className="cart-btn" onClick={openCart}>
          <ShoppingCart size={20} /> <span className="badge">{cartCount}</span>
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
