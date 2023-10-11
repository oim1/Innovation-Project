import React, {createElement, useEffect, useState} from "react";
import "../styles/AssetsPage.css";
import searchIcon from "../../public/assets/images/search-svgrepo-com.svg";
import { Slider } from "@mui/material";
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
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://bjihaznrhkskpfiyimdr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqaWhhem5yaGtza3BmaXlpbWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MDE0ODQsImV4cCI6MjAxMjQ3NzQ4NH0.2gJLsyOSXl2uLEZ0vJO3xWr7Kod3ddtqfkmR8tiM4J8", { db: { schema: "Marketplace"}});


const Assets = () => {
  function addHandler(e) {
    e.preventDefault();
    alert("Added to cart!");
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const { data } = await supabase.from("Product").select();
    setProducts(data);
  }

  return (
    <>
      <div className="AssetsPage">
        <Sidebar />
        <div className="gridContainer">
          {
            products?.map((product) => (
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
