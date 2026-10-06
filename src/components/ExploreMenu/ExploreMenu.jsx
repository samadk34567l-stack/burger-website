import React, { useState } from 'react';
import Categories from '../Categories/Categories';
import MenuCard from '../MenuCard/MenuCard';
import './ExploreMenu.css';

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&q=80`;

// Pehli 6 items shuru mein nazar aati hain (2 rows x 3), baqi 6 "View All" par
const exploreItems = [
  // Row 1
  { id: 101, title: 'Truffle Burger', price: '12.99', desc: 'Double Angus beef patty with melted cheddar and truffle mayo.', image: img('1568901346375-23c9450c58cd') },
  { id: 102, title: 'Crispy Zinger', price: '9.49', desc: 'Extra crispy chicken fillet with spicy slaw and pickles.', image: img('1625813506062-0aeb1d7a094b') },
  { id: 103, title: 'Loaded Fries', price: '6.99', desc: 'Golden fries smothered in cheese sauce, jalapeños, and beef bits.', image: img('1585109649139-366815a0d713') },
  // Row 2
  { id: 104, title: 'Classic Cheeseburger', price: '8.49', desc: 'Juicy beef patty, American cheese, onions, pickles and our house sauce.', image: img('1550547660-d9450f859349') },
  { id: 105, title: 'Pepperoni Pizza', price: '13.99', desc: 'Stone-baked crust, mozzarella and crispy pepperoni slices.', image: img('1513104890138-7c749659a591') },
  { id: 106, title: 'Margherita Pizza', price: '11.99', desc: 'Fresh tomato sauce, creamy mozzarella and basil on a thin crust.', image: img('1565299624946-b28f40a0ae38') },
  // Row 3 (View All)
  { id: 107, title: 'BBQ Bacon Burger', price: '13.49', desc: 'Smoky BBQ sauce, crispy bacon, cheddar and onion rings.', image: img('1571091718767-18b5b1457add') },
  { id: 108, title: 'Crinkle Fries', price: '4.99', desc: 'Crispy crinkle-cut fries with a sprinkle of sea salt.', image: img('1573080496219-bb080dd4f877') },
  { id: 109, title: 'Cheese Overload Pizza', price: '14.49', desc: 'Four-cheese blend with a golden, bubbling cheese crust.', image: img('1604382354936-07c5d9983bd3') },
  // Row 4 (View All)
  { id: 110, title: 'Chocolate Milkshake', price: '5.99', desc: 'Thick, creamy chocolate shake topped with whipped cream.', image: img('1572490122747-3968b75cc699') },
  { id: 111, title: 'Iced Cola', price: '2.99', desc: 'Ice-cold cola served over crushed ice.', image: img('1622483767028-3f66f32aef97') },
  { id: 112, title: 'Fresh Lemonade', price: '3.49', desc: 'Freshly squeezed lemons with mint and a hint of sweetness.', image: img('1544145945-f90425340c7e') },
];

const INITIAL_COUNT = 6;

const ExploreMenu = ({ addToCart }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? exploreItems : exploreItems.slice(0, INITIAL_COUNT);

  return (
    <section className="menu-section" id="explore">
      <div className="section-title">
        <h2>Explore Our <span>Menu</span></h2>
        <p>Choose from our trending categories crafted for 2026</p>
      </div>

      {/* Categories Tab Component */}
      <Categories />

      <div className="menu-grid">
        {visibleItems.map((item) => (
          <MenuCard
            key={item.id}
            title={item.title}
            price={item.price}
            desc={item.desc}
            image={item.image}
            onAdd={() =>
              addToCart({
                id: item.id,
                name: item.title,
                price: Number(item.price),
                image: item.image,
              })
            }
          />
        ))}
      </div>

      <div className="view-all-wrap">
        <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
    </section>
  );
};

export default ExploreMenu;
