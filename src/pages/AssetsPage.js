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
  return (
    <>
      <div className="AssetsPage">
        <Sidebar />
        <div className="gridContainer">
          <div className="gridItem">
            <img src={item1} alt="marketplace item" />
            <p>BMW M4 at Dawn </p>
            <p>$300</p>
          </div>
          <div className="gridItem">
            <img src={item2} alt="marketplace item" />
            <p>Yamaha MT-07 in an empty parking lot</p>
            <p>$12,000</p>
          </div>
          <div className="gridItem">
            <img src={item3} alt="marketplace item" />
            <p>Audi car on an autumn road</p>
            <p>$50</p>
          </div>
          <div className="gridItem">
            <img src={item4} alt="marketplace item" />
            <p>A vintage gameboy in a glass caser</p>
            <p>$75</p>
          </div>
          <div className="gridItem">
            <img src={item5} alt="marketplace item" />
            <p>Close-up vintage camera</p>
            <p>$325</p>
          </div>
          <div className="gridItem">
            <img src={item6} alt="marketplace item" />
            <p>Black and silver nikon cameras</p>
            <p>$825</p>
          </div>
          <div className="gridItem">
            <img src={item7} alt="marketplace item" />
            <p>Close-up Black Drone</p>
            <p>$1200</p>
          </div>
          <div className="gridItem">
            <img src={item8} alt="marketplace item" />
            <p>Cat</p>
            <p>$850</p>
          </div>
          <div className="gridItem">
            <img src={item9} alt="marketplace item" />
            <p>Cute dog no. 1</p>
            <p>$1280</p>
          </div>
          <div className="gridItem">
            <img src={item10} alt="marketplace item" />
            <p>Cute Dog no. 2</p>
            <p>$720</p>
          </div>
          <div className="gridItem">
            <img src={item11} alt="marketplace item" />
            <p>Burger</p>
            <p>$5</p>
          </div>
          <div className="gridItem">
            <img src={item12} alt="marketplace item" />
            <p>Coca cola glass bottle</p>
            <p>$1135</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assets;
