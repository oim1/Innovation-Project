import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/AssetsPage.css";
import Sidebar from "../components/Sidebar";
import item1 from "../../public/assets/images/assetsPageImages/item1.jpg";
import item2 from "../../public/assets/images/assetsPageImages/item2.jpg";
import item3 from "../../public/assets/images/assetsPageImages/item3.jpg";
import item4 from "../../public/assets/images/assetsPageImages/item4.jpg";
import item5 from "../../public/assets/images/assetsPageImages/item5.jpg";
import item6 from "../../public/assets/images/assetsPageImages/item6.jpg";
import item7 from "../../public/assets/images/assetsPageImages/item7.jpg";
import item8 from "../../public/assets/images/assetsPageImages/item8.jpg";
import item9 from "../../public/assets/images/assetsPageImages/item9.jpg";
import item10 from "../../public/assets/images/assetsPageImages/item10.jpg";
import item11 from "../../public/assets/images/assetsPageImages/item11.jpg";
import item12 from "../../public/assets/images/assetsPageImages/item12.jpg";
import Cart from "./Cart";

const Assets = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  function addHandler(e, item) {
    e.preventDefault();
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.name === existingItem.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      
    }
    
  }

  function updateQuantity(item, quantityChange) {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.name === item.name) {
        const newQuantity = cartItem.quantity + quantityChange;
        return newQuantity > 0 ? { ...cartItem, quantity: newQuantity } : cartItem;
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  function removeFromCart(item) {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }
  return (
    <>
      <div className="AssetsPage">
        <Sidebar />
        <div className="gridContainer">
          <div className="gridItem">
            <img src={item1} alt="marketplace item" />
            <p>BMW M4 at Dawn </p>
            <div className="item-price"> $300</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "BMW M4 at Dawn", price: 300 })}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item2} alt="marketplace item" />
            <p>Yamaha MT-07 in an empty parking lot</p>
            <div className="item-price"> $12,000</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "Yamaha MT-07", price: 12000 })}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item3} alt="marketplace item" />
            <p>Audi car on an autumn road</p>
            <div className="item-price"> $1,300</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "Audi car on an autumn road", price: 1300 })}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item4} alt="marketplace item" />
            <p>A vintage gameboy in a glass caser</p>
            <div className="item-price"> $70</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "A vintage gameboy in a glass caser", price: 70 })}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item5} alt="marketplace item" />
            <p>Close-up vintage camera</p>
            <div className="item-price"> $320</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "Close-up vintage camera", price: 320 })}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item6} alt="marketplace item" />
            <p>Black and silver nikon cameras</p>
            <div className="item-price"> $825</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "Black and silver nikon cameras", price: 825 })}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item7} alt="marketplace item" />
            <p>Close-up Black Drone</p>
            <div className="item-price"> $3,000</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "Close-up Black Drone", price: 3000 })}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item8} alt="marketplace item" />
            <p>Cat</p>
            <div className="item-price"> $850</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "Cat", price: 850 })}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item9} alt="marketplace item" />
            <p>Cute dog no. 1</p>
            <div className="item-price"> $400</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "Cute dog no. 1", price: 400 })}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item10} alt="marketplace item" />
            <p>Cute Dog no. 2</p>
            <div className="item-price"> $360</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "Cute Dog no. 2", price: 360 })}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item11} alt="marketplace item" />
            <p>Burger</p>
            <div className="item-price"> $3</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "Burger", price: 3 })}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item12} alt="marketplace item" />
            <p>Coca cola glass bottle</p>
            <div className="item-price"> $110</div>
            <button className="add-to-cart-btn" onClick={(e) => addHandler(e, { name: "Coca cola glass bottle", price: 110 })}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="CartContainer">
        <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
      </div>
      <Link to={"/cartpage"}>My Cart</Link>
    </>
  );
};

export default Assets;