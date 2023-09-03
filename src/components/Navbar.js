import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../../public/assets/logos/coinwave.png";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to={"/"}>
          <img src={logo} alt="coinwave logo" />
          <div className="hiddenLinks">
            <Link to={"/"}>Home</Link>
            <Link to={"/assetspage"}>Assets</Link>
            <Link to={"/transactions"}>History</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/login"}>
              <button> Log in </button>
            </Link>
          </div>
        </Link>
      </div>
      <div className="rightSide">
        <Link to={"/"}>Home</Link>
        <Link to={"/assetspage"}>Assets</Link>
        <Link to={"/transactions"}>History</Link>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/login"}>
          <button> Log in </button>{" "}
        </Link>
        <button id="hamburger" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
