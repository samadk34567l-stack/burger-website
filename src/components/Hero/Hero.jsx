import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-modern" id="home">
      <div className="hero-text">
        <h1 className="glowing-text">Crave it?<br/><span>We Deliver it.</span></h1>
        <p>Experience the 2026 standard of fast food. Premium ingredients, crafted with 3D precision.</p>
        <button className="cta-btn">Order Now <ArrowRight size={20} /></button>
      </div>
      <div className="hero-visual">
        <div className="neon-circle"></div>
        {/* Transparent background 3D-like image */}
        <img src="https://freepngimg.com/thumb/burger/5-2-burger-png-thumb.png" alt="3D Burger" className="floating-burger" />
      </div>
    </section>
  );
};

export default Hero;
