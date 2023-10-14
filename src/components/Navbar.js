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
      <div className="leftSide" id={openLinks ? "open" : "close"}> {/*The left side of the nav bar*/}
        <Link to={"/"}>
          <img src={logo} alt="coinwave logo" /> {/*CoinWAVE logo*/}
          <div className="hiddenLinks">           {/*Hidden links for small-sized layout*/ }
            <Link to={"/"}>Home</Link>
            <Link to={"/assetspage"}>Assets</Link>
            <Link to={"/cart"}>My Cart</Link>
            <Link to={"/transactions"}>History</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/login"}>
              <button> Log in </button>
            </Link>
          </div>
        </Link>
      </div>
      <div className="rightSide">           {/* Links to different pages*/}
        <Link to={"/"}>Home</Link>
        <Link to={"/assetspage"}>Assets</Link>
        <Link to={"/cart"}>My Cart</Link>
        <Link to={"/transactions"}>History</Link>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/login"}>
          <button> Log in </button>{" "}
        </Link>
        <button id="hamburger" onClick={toggleNavbar}>  {/* Hamburger button for small-sized layouts */}
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
