import React from "react";
import "../styles/pages/Cart.css";

const calculateTotal = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const Cart = ({ cartItems = [], updateQuantity, removeFromCart }) => {
  const total = calculateTotal(cartItems);


  return (
    <div className="Cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems && cartItems.map((item, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            {item.name} - ${item.price} 
          </div>
          <div>
            <button id="addremove" onClick={() => updateQuantity(item, 1)}>+</button>
            {item.quantity}
            <button id="addremove" onClick={() => updateQuantity(item, -1)}>-</button>
            <button id="Remove" onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        </li>
        
        ))}
      </ul>
      <div className="Total">Total is ---- ${total}</div>
      

    </div>
  );
};


export default Cart;
