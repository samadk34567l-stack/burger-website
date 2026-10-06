import React from 'react';
import { ShoppingBag, Trash2 } from 'lucide-react';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, closeCart, cartItems, increaseQty, decreaseQty, removeItem }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2 className="cart-title">Your Order <ShoppingBag size={24} /></h2>
        <button className="close-btn" onClick={closeCart}>&times;</button>
      </div>

      <div className="cart-body">
        {cartItems.length === 0 ? (
          <div className="empty-cart">Cart is empty!</div>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="item-info">
                <h4>{item.name}</h4>
                <p className="item-price">${item.price.toFixed(2)}</p>

                <div className="qty-controls">
                  <button
                    className="qty-btn"
                    onClick={() => decreaseQty(item.id)}
                    disabled={item.qty <= 1}
                    aria-label="Quantity kam karein"
                  >
                    &minus;
                  </button>
                  <span className="qty-value">{item.qty}</span>
                  <button
                    className="qty-btn"
                    onClick={() => increaseQty(item.id)}
                    aria-label="Quantity barhayein"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="item-right">
                <span className="item-total">${(item.price * item.qty).toFixed(2)}</span>
                <button
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}
                  aria-label="Item delete karein"
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Checkout Now</button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
