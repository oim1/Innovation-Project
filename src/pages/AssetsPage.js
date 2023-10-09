import React, { createElement } from "react";
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

const Assets = () => {
  function addHandler(e) {
    e.preventDefault();
    alert("Added to cart!");
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
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item2} alt="marketplace item" />
            <p>Yamaha MT-07 in an empty parking lot</p>
            <div className="item-price"> $12,000</div>
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item3} alt="marketplace item" />
            <p>Audi car on an autumn road</p>
            <div className="item-price"> $1,300</div>
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item4} alt="marketplace item" />
            <p>A vintage gameboy in a glass caser</p>
            <div className="item-price"> $70</div>
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item5} alt="marketplace item" />
            <p>Close-up vintage camera</p>
            <div className="item-price"> $320</div>
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item6} alt="marketplace item" />
            <p>Black and silver nikon cameras</p>
            <div className="item-price"> $825</div>
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item7} alt="marketplace item" />
            <p>Close-up Black Drone</p>
            <div className="item-price"> $3,000</div>
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item8} alt="marketplace item" />
            <p>Cat</p>
            <div className="item-price"> $850</div>
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item9} alt="marketplace item" />
            <p>Cute dog no. 1</p>
            <div className="item-price"> $400</div>
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item10} alt="marketplace item" />
            <p>Cute Dog no. 2</p>
            <div className="item-price"> $360</div>
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item11} alt="marketplace item" />
            <p>Burger</p>
            <div className="item-price"> $3</div>
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
          <div className="gridItem">
            <img src={item12} alt="marketplace item" />
            <p>Coca cola glass bottle</p>
            <div className="item-price"> $110</div>
            <button className="add-to-cart-btn" onClick={addHandler}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assets;
