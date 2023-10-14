import React from "react";

import searchIcon from "../../public/assets/images/search-svgrepo-com.svg";
import { Slider } from "@mui/material";

import "../styles/components/Sidebar.css";

function Sidebar() {
  const [value, setValue] = React.useState([0, 100]);

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    alert("Submitted");
  };

  return (
    <div className="Sidebar">
      {/*Search bar section*/}
      <div className="SearchBar">     
        <input
          id="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="Search"
        />
        <button
          id="searchQuerySubmit"
          type="submit"
          name="searchQuerySubmit"
          onClick={searchSubmitHandler}
        >
          <img
            src={searchIcon}
            style={{ width: 24, height: 24 }}
            alt="searchIcon"
          />
        </button>
      </div>
      <hr id="line" />
      {/* End of search bar section */}

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
          <input type="radio" value="All" name="test" />
          All
        </label>

        <label className="sidebar-label-container">
          <input type="radio" value="Vehicles" name="test" />
          Vehicles
        </label>

        <label className="sidebar-label-container">
          <input type="radio" value="Electronics" name="test" />
          Electronics
        </label>

        <label className="sidebar-label-container">
          <input type="radio" value="Animals" name="test" />
          Animals
        </label>

        <label className="sidebar-label-container">
          <input type="radio" value="FoodnDrinks" name="test" />
          Food & Drinks
        </label>
      </div>
      {/* End of categories section */}
    </div>
  );
}

export default Sidebar;
