import React, { useState } from 'react';
import './Categories.css';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categoriesList = ['All', 'Burgers', 'Pizzas', 'Fries & Sides', 'Drinks'];

  return (
    <div className="categories-container">
      {categoriesList.map((cat, index) => (
        <button
          key={index}
          className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
