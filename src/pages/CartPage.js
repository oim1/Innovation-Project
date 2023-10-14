import React from "react";
import Cart from "./Cart";

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
  return (
    <div className="CartPage">
      <h1>Cart Page</h1>
      <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;