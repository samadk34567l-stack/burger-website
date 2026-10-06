import React, { useState } from 'react';
import './Menu.css';

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;

// Pehli 6 items shuru mein nazar aati hain (2 rows x 3), baqi 3 "View All" par
const products = [
  // Row 1
  { id: 1, name: "Neon Double Beef", price: 14.99, image: img('1568901346375-23c9450c58cd') },
  { id: 2, name: "Spicy Cyber Chicken", price: 11.50, image: img('1625813506062-0aeb1d7a094b') },
  { id: 3, name: "Veggie Hologram", price: 9.99, image: img('1520072959219-c595dc870360') },
  // Row 2
  { id: 4, name: "Cyber Cheese Melt", price: 10.99, image: img('1550547660-d9450f859349') },
  { id: 5, name: "Galaxy BBQ Stack", price: 13.49, image: img('1571091718767-18b5b1457add') },
  { id: 6, name: "Plasma Crispy Zinger", price: 10.49, image: img('1594212699903-ec8a3eca50f5') },
  // Row 3 (View All)
  { id: 7, name: "Quantum Mushroom Swiss", price: 12.49, image: img('1553979459-d2229ba7433b') },
  { id: 8, name: "Turbo Triple Stack", price: 16.99, image: img('1586190848861-99aa4a171e90') },
  { id: 9, name: "Nova Chili Cheese", price: 11.99, image: img('1561758033-d89a9ad46330') },
];

const INITIAL_COUNT = 6;

const Menu = ({ addToCart }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, INITIAL_COUNT);

  return (
    <section className="menu-sect" id="menu">
      <h2 className="sect-title">Trending <span>Now</span></h2>
      <div className="grid-container">
        {visibleProducts.map(item => (
          <div className="glass-card" key={item.id}>
            <div className="img-container">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="card-info">
              <h3>{item.name}</h3>
              <div className="price-row">
                <span className="price">${item.price.toFixed(2)}</span>
                <button className="add-btn" onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="trend-view-wrap">
        <button className="trend-view-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
    </section>
  );
};

export default Menu;
