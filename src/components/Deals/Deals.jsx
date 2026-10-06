import React from 'react';
import './Deals.css';

const dealsList = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    tag: '30% OFF',
    title: 'Family Feast Combo',
    desc: '4 burgers, 2 large loaded fries aur 4 drinks - sharing ke liye perfect.',
    oldPrice: '48.99',
    newPrice: '34.99',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=400&q=80',
    tag: 'BEST SELLER',
    title: 'Zinger Duo Deal',
    desc: '2 Crispy Zinger burgers, 1 regular fries aur 2 soft drinks.',
    oldPrice: '24.99',
    newPrice: '18.99',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=400&q=80',
    tag: 'STUDENT',
    title: 'Quick Lunch Meal',
    desc: '1 Truffle Burger, small fries aur 1 drink - student card par special price.',
    oldPrice: '16.99',
    newPrice: '12.99',
  },
];

const Deals = ({ addToCart }) => {
  return (
    <section className="deals-section" id="deals">
      <div className="section-title">
        <h2>Hot <span>Deals</span></h2>
        <p>Limited time offers - jaldi order karein</p>
      </div>

      <div className="deals-grid">
        {dealsList.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <span className="deal-tag">{deal.tag}</span>
            <h3>{deal.title}</h3>
            <p>{deal.desc}</p>
            <div className="deal-prices">
              <span className="deal-new-price">${deal.newPrice}</span>
              <span className="deal-old-price">${deal.oldPrice}</span>
            </div>
            <button
              className="deal-btn"
              onClick={() =>
                addToCart({
                  id: `deal-${deal.id}`,
                  name: deal.title,
                  price: Number(deal.newPrice),
                  image: deal.image,
                })
              }
            >
              Grab This Deal
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;
