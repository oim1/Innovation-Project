import React from "react";
import "../styles/Cart.css";

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  return (
    <div className="Cart">
      <h2>Shopping Cart</h2>
      <ul>
      {cartItems && cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} 
            <button id = "addremove" onClick={() => updateQuantity(item, 1)}>+</button>
            {item.quantity}
            <button id = "addremove" onClick={() => updateQuantity(item, -1)}>-</button>
            <button id = "Remove" onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
