import React, {useContext, useEffect, useState} from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createClient } from "@supabase/supabase-js";

import "../styles/components/Sidebar.css";
import "../styles/pages/AssetsPage.css";

import searchIcon from "../../public/assets/images/search-svgrepo-com.svg";

const supabase = createClient("https://bjihaznrhkskpfiyimdr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqaWhhem5yaGtza3BmaXlpbWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MDE0ODQsImV4cCI6MjAxMjQ3NzQ4NH0.2gJLsyOSXl2uLEZ0vJO3xWr7Kod3ddtqfkmR8tiM4J8", { db: { schema: "Marketplace"}});


const Assets = () => {
  function addHandler(e) {
    e.preventDefault();
    alert(searchQuery);
  }

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("")
  const [isSelected, setSelected] = useState(false)

  // // Add to cart
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
  //   if (storedCartItems) {
  //     setCartItems(storedCartItems);
  //   }
  // }, []);

  // function addHandler(e, item) {
  //   e.preventDefault();
  //   const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);

  //   if (existingItem) {
  //     const updatedCartItems = cartItems.map((cartItem) =>
  //       cartItem.name === existingItem.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
  //     );
  //     setCartItems(updatedCartItems);
  //     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  //   } 
  //   else {
  //     setCartItems([...cartItems, { ...item, quantity: 1 }]);
  //   }

  // }

  // function updateQuantity(item, quantityChange) {
  //   const updatedCartItems = cartItems.map((cartItem) => {
  //     if (cartItem.name === item.name) {
  //       const newQuantity = cartItem.quantity + quantityChange;
  //       return newQuantity > 0 ? { ...cartItem, quantity: newQuantity } : cartItem;
  //     }
  //     return cartItem;
  //   });

  //   setCartItems(updatedCartItems);
  //   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  // }

  // function removeFromCart(item) {
  //   const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
  //   setCartItems(updatedCartItems);
  //   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  // }

  // Add to cart

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const { data } = await supabase.from("Product").select();
    setProducts(data);
  }

  const [searchQuery, setSearchQuery]  = useState("")

  const categoryHandler = (e) => {
    setCategory(e.target.value);
    setSelected(true);
  };

  const searchHandler = () => {
    console.log(category)
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <div className="AssetsPage">
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
            {/* <button
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
            </button> */}
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

                <div className="gridItem">
                  <img src={product.Image_Link} alt="marketplace item" />
                  <p id="productTitle">{product.Product_Name}</p>
                  <p>{product.Product_Description}</p>
                  <div className="item-price"> ${product.Product_Price}</div>
                  <button className="add-to-cart-btn" onClick={addHandler}>
                    Add to cart
                  </button>
                </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Assets;
