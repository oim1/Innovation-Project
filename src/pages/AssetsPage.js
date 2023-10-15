import React, {useContext, useEffect, useState} from "react";
import "../styles/pages/AssetsPage.css";
import { createClient } from "@supabase/supabase-js";
import { Slider } from "@mui/material";
import "../styles/components/Sidebar.css";
import searchIcon from "../../public/assets/images/search-svgrepo-com.svg";

const supabase = createClient("https://bjihaznrhkskpfiyimdr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqaWhhem5yaGtza3BmaXlpbWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MDE0ODQsImV4cCI6MjAxMjQ3NzQ4NH0.2gJLsyOSXl2uLEZ0vJO3xWr7Kod3ddtqfkmR8tiM4J8", { db: { schema: "Marketplace"}});


const Assets = () => {
  const [cart, setCart] = useState([]);

  function addHandler(e) {
    e.preventDefault();
    alert(searchQuery);
  }
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
  
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState([0, 100]);
  const [category, setCategory] = useState("")
  const [isSelected, setSelected] = useState(false)

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const { data } = await supabase.from("Product").select();
    setProducts(data);
  }

  const [searchQuery, setSearchQuery]  = useState("")

  const totalAmount = calculateTotal();

  const categoryHandler = (e) => {
    setCategory(e.target.value);
    setSelected(true);
  };

  const searchHandler = () => {
    console.log(category)
  };

  return (
    <>
      <div className="AssetsPage">
        <div className="Sidebar">
          <div className="SearchBar">
            <input
                id="searchQueryInput"
                type="text"
                name="searchQueryInput"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                id="searchQuerySubmit"
                type="submit"
                name="searchQuerySubmit"
                onClick={searchHandler}
            >
              <img
                  src={searchIcon}
                  style={{ width: 24, height: 24 }}
                  alt="searchIcon"
              />
            </button>
          </div>
          <hr id="line" />
          {/* Price selection section */}
          <h2>Price Range</h2>
          <Slider
              value={value}
              onChange={rangeSelector}
              valueLabelDisplay="auto"
              max={10000}
          />
          {value[0]} - {value[1]}
          {/* End of price section */}
          <hr id="line" />
          {/* Categories selection section */}
          <h1 id="filter">Categories</h1>
          <div>
            <label className="sidebar-label-container">
              <input type="radio" value="" name="test" onChange={e => (categoryHandler(e))}/>
              All
            </label>

            <label className="sidebar-label-container">
              <input type="radio" value="1" name="test" onChange={e => (categoryHandler(e))} />
              Vehicles
            </label>

            <label className="sidebar-label-container">
              <input type="radio" value="2" name="test" onChange={e => (setCategory(e.target.value))}/>
              Electronics
            </label>

            <label className="sidebar-label-container">
              <input type="radio" value="3" name="test" onChange={e => (setCategory(e.target.value))}/>
              Animals
            </label>

            <label className="sidebar-label-container">
              <input type="radio" value="4" name="test" onChange={e => (setCategory(e.target.value))}/>
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

              <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
        <div className="total">Total: ${totalAmount}</div>
        <br></br>
          {cart.map((item) => (
            <li key={item.id}>
              <div class="details">{item.Product_Name}  ${item.Product_Price}</div>
              <button class="addremove" onClick={() => incrementQuantity(item)}>+</button>
              {item.quantity}
              <button class="addremove" onClick={() => decrementQuantity(item)}>-</button>
              <button class="Remove" onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        
      </div>

      </div>
    </>
  );
};


export default Assets;