import React from "react";

import searchIcon from "../../public/assets/images/search-svgrepo-com.svg";
import { Slider } from "@mui/material";

import "../styles/Sidebar.css";

function Sidebar() {
  const [value, setValue] = React.useState([0, 100]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Sidebar">
      <div className="SearchBar">
        <input
          id="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="Search"
        />
        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
          <img
            src={searchIcon}
            style={{ width: 24, height: 24 }}
            alt="searchIcon"
          />
        </button>
      </div>
      <h2>Price Range</h2>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        max={10000}
      />
      {value[0]} - {value[1]}
      <hr id="line" />
      <h1 id="filter">Categories</h1>
      <button className="categoryButton" type="button">
        Property
      </button>
      <button className="categoryButton" type="button">
        Health & Care
      </button>
      <button className="categoryButton" type="button">
        Groceries
      </button>
      <button className="categoryButton" type="button">
        Vehicles
      </button>
      <button className="categoryButton" type="button">
        Electronics
      </button>
      <button className="categoryButton" type="button">
        NFTs
      </button>
    </div>
  );
}

export default Sidebar;
