import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import CartSidebar from './components/CartSidebar/CartSidebar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Menu from './components/Menu/Menu';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import Deals from './components/Deals/Deals';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Cart mein item add karne ka function (same item dobara add ho to quantity barh jati hai)
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setIsCartOpen(true); // Item add hotay hi cart drawer open ho jayega
  };

  // Quantity +1
  const increaseQty = (id) => {
    setCartItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  };

  // Quantity -1 (kam az kam 1 rehti hai, poora hatane ke liye delete button hai)
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))
    );
  };

  // Item cart se delete
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  // Navbar badge ke liye total quantity
  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="app-container">
      <Navbar cartCount={cartCount} openCart={() => setIsCartOpen(true)} />

      {/* Overlay jab cart khule */}
      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>}

      <CartSidebar
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        cartItems={cartItems}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
      />

      <main>
        <Hero />
        <Features />
        <Menu addToCart={addToCart} />

        <ExploreMenu addToCart={addToCart} />

        <Deals addToCart={addToCart} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
