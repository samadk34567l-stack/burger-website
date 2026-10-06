import React from 'react';
import './MenuCard.css';

const MenuCard = ({ title, price, image, desc, onAdd }) => {
  return (
    <div className="menu-card">
      <div className="card-img-wrapper">
        <img
          src={image}
          alt={title}
        />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="card-footer">
          <span className="price">${price}</span>
          <button className="order-btn" onClick={onAdd}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
