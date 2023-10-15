import React, {useContext, useEffect, useState} from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createClient } from "@supabase/supabase-js";
import axios from 'axios'

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
  const [searchQuery, setSearchQuery]  = useState("")
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  //Retrieve products data from database
  async function getProducts() {
    //const { data } = await supabase.from("Product").select();
    const { data } = await axios.get("http://127.0.0.1:8000/products/");
    setProducts(data);
  }

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
