import React, {useContext, useEffect, useState} from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createClient } from "@supabase/supabase-js";
import axios from 'axios'

import "../styles/components/Sidebar.css";
import "../styles/pages/AssetsPage.css";

import searchIcon from "../../public/assets/images/search-svgrepo-com.svg";

const supabase = createClient("https://bjihaznrhkskpfiyimdr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqaWhhem5yaGtza3BmaXlpbWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MDE0ODQsImV4cCI6MjAxMjQ3NzQ4NH0.2gJLsyOSXl2uLEZ0vJO3xWr7Kod3ddtqfkmR8tiM4J8", { db: { schema: "Marketplace"}});


const Assets = () => {
  const [cart, setCart] = useState([]);

  function addHandler(e) {
    e.preventDefault();
    alert(searchQuery);
  }
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("")
  const [isSelected, setSelected] = useState(false)
  const [searchQuery, setSearchQuery]  = useState("")
  const [openSidebar, setOpenSidebar] = useState(false);
  
  function addToCart(item) {
    const existingItem = cart.find((cartItem) => cartItem.Product_Name === item.Product_Name);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.Product_Name === existingItem.Product_Name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }
  function incrementQuantity(item) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.Product_Name === item.Product_Name) {
        const newQuantity = cartItem.quantity + 1;
        return newQuantity > 0 ? { ...cartItem, quantity: newQuantity } : cartItem;
      }
      return cartItem;
    });
  
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  }

  function decrementQuantity(item) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.Product_Name === item.Product_Name) {
        const newQuantity = cartItem.quantity - 1;
        return newQuantity > 0 ? { ...cartItem, quantity: newQuantity } : cartItem;
      }
      return cartItem;
    });
  
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  }

  function removeFromCart(item) {
    const updatedCart = cart.filter((cartItem) => cartItem.Product_Name !== item.Product_Name);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  }

  function calculateTotal() {
    let total = 0;
    for (const item of cart) {
      total += item.Product_Price * item.quantity;
    }
    return total;
  }

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getProducts();
  }, []);

  //Retrieve products data from database
  async function getProducts() {
    //const { data } = await supabase.from("Product").select();
    const { data } = await axios.get("http://127.0.0.1:8000/products/");
    setProducts(data);
  }

  const totalAmount = calculateTotal();

  const categoryHandler = (e) => {
    setCategory(e.target.value);
    setSelected(true);
  };

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <div className="AssetsPage">
        <div className="mainContainer">
          <div className="Sidebar" id={openSidebar ? "open" : "close"}>
            <ArrowForwardIosIcon className="arrowButton" onClick={toggleSidebar}/>
            <div className="SearchBar">
              <input
                  id="searchQueryInput"
                  type="text"
                  name="searchQueryInput"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          
            {/* Categories selection section */}
            <div className="Categories">
              <h1>Categories</h1>
              <label className="sidebar-label-container">
                <input type="radio" value="" name="categories" onChange={e => (categoryHandler(e))}/>
                <span class="checkmark"></span>
                All
              </label>

              <label className="sidebar-label-container">
                <input type="radio" value="1" name="categories" onChange={e => (categoryHandler(e))} />
                <span class="checkmark"></span>
                Vehicles
              </label>

              <label className="sidebar-label-container">
                <input type="radio" value="2" name="categories" onChange={e => (setCategory(e.target.value))}/>
                <span class="checkmark"></span>
                Electronics
              </label>

              <label className="sidebar-label-container">
                <input type="radio" value="3" name="categories" onChange={e => (setCategory(e.target.value))}/>
                <span class="checkmark"></span>
                Animals
              </label>

              <label className="sidebar-label-container">
                <input type="radio" value="4" name="categories" onChange={e => (setCategory(e.target.value))}/>
                <span class="checkmark"></span>
                Food & Drinks
              </label>
            </div>
          </div>
          <div className="gridContainer">
            {
                  products?.filter( (product) => {
                        if (searchQuery || category !== "") {
                          if (searchQuery && category !== "") {
                            return product.Product_Name.toLowerCase().includes(searchQuery.toLowerCase()) && category === product.Product_Category.toString();
                          }
                          if (searchQuery === "" && category !== "") {
                            return category === product.Product_Category.toString();
                          }
                          return product.Product_Name.toLowerCase().includes(searchQuery.toLowerCase());
                        }
                        return true;
                      }
                  ).map((product) => (
                    <div className="gridItem" key={product.id}>
                      <img src={product.Image_Link} alt="marketplace item" />
                      <p id="productTitle">{product.Product_Name}</p>
                      <p>{product.Product_Description}</p>
                      <div className="item-price"> ${product.Product_Price}</div>
                      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                        Add to cart
                      </button>
                    </div>
                  ))}
          </div>
        </div>
        <div className="cart">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div class="details">{item.Product_Name}  ${item.Product_Price}</div>
                <button class="addremove" onClick={() => incrementQuantity(item)}>+</button>
                {item.quantity}
                <button class="addremove" onClick={() => decrementQuantity(item)}>-</button>
                <button class="Remove" onClick={() => removeFromCart(item)}>Remove</button>
              </li>
                )
              )
            }
          </ul>
          <div className="total">Total: ${totalAmount}</div>
          <button className="checkout" type="submit" onClick={() => {alert("Checked out!")}}> Checkout</button>
        </div>
      </div>
    </>
  );
};
export default Assets;
