import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-col">
          <h3>Crave<span>Bite</span></h3>
          <p>Serving the ultimate fast-food experience with lightning-fast delivery and top-notch ingredients.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#deals">Special Deals</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Subscribe to get exclusive discount codes and 2026 menu updates.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Join</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 CraveBite Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
