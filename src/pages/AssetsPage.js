import React, { createElement } from "react";
import "../styles/AssetsPage.css"
import searchIcon from "../../public/assets/images/search-svgrepo-com.svg"
import { Slider } from "@mui/material";
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
    const [ value, setValue] = React.useState([0, 100]);
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div className="AssetsPage">
                <div className="Search">
                    <div className="SearchBar">
                        <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" />
                        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit"><img src={searchIcon} style={{width:24, height:24 }} alt="searchIcon"/></button>
                    </div>
                    <hr id="line" />
                    <h1 id="filter">Filter</h1>
                    <input id="locationQueryInput" type="text" name="searchQueryInput" placeholder="Location" />
                    <a id="googlemaps" href="https://www.google.com/maps/">Google Maps</a>
                    <h2>Price Range</h2>
                    <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto" max={10000}/>
                    {value[0]} - {value[1]}
                    <hr id="line" />
                    <h1 id="filter">Categories</h1>
                    <button className="categoryButton" type="button">Property</button>
                    <button className="categoryButton" type="button">Health & Care</button>
                    <button className="categoryButton" type="button">Groceries</button>
                    <button className="categoryButton" type="button">Vehicles</button>
                    <button className="categoryButton" type="button">Electronics</button>
                    <button className="categoryButton" type="button">NFTs</button>
                </div>
                <div className="pageContent">
                    <div className="gridItem">
                        <img src={item1}  alt="marketplace item"/>
                        <p>$300</p>
                        <p>Samsung Monitor</p>
                    </div>
                    <div className="gridItem">
                        <img src={item2}  alt="marketplace item"/>
                        <p>$12,000</p>
                        <p>Hyundai 2017 Model</p>

                    </div>
                    <div className="gridItem">
                        <img src={item3}  alt="marketplace item"/>
                        <p>$50</p>
                        <p>Unbranded Brown Pants</p>
                    </div>
                    <div className="gridItem">
                        <img src={item4}  alt="marketplace item"/>
                        <p>$75</p>
                        <p>Vintage Record Player</p>
                    </div>
                    <div className="gridItem">
                        <img src={item5}  alt="marketplace item"/>
                        <p>$325</p>
                        <p>New Balance Shoes</p>
                    </div>
                    <div className="gridItem">
                        <img src={item6}  alt="marketplace item"/>
                        <p>$825</p>
                        <p>Used Drum Kit In Good Condition</p>
                    </div>
                    <div className="gridItem">
                        <img src={item7}  alt="marketplace item"/>
                        <p>$1200</p>
                        <p>Vintage Piano Good Condition</p>
                    </div>
                    <div className="gridItem">
                        <img src={item8}  alt="marketplace item"/>
                        <p>$850</p>
                        <p>Nvidia GPU Used</p>
                    </div>
                    <div className="gridItem">
                        <img src={item9}  alt="marketplace item"/>
                        <p>$1280</p>
                        <p>Herman Miller Aeron Chair Used</p>
                    </div>
                    <div className="gridItem">
                        <img src={item10}  alt="marketplace item"/>
                        <p>$720</p>
                        <p>Electronic Safe Brand New</p>
                    </div>
                    <div className="gridItem">
                        <img src={item11}  alt="marketplace item"/>
                        <p>$5</p>
                        <p>Bag Of Chocolate Eggs</p>
                    </div>
                    <div className="gridItem">
                        <img src={item12}  alt="marketplace item"/>
                        <p>$1135</p>
                        <p>Fender Telecaster 2018</p>
                    </div>
                </div>
        </div>
    )
}

export default Assets;