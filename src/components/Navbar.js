import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";
import logo from "../../public/assets/logos/coinwave.png";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  
  return (
    <div className="navbar">
        <Link to={"/"}>
          <img src={logo} alt="coinwave logo" /> {/*CoinWAVE logo*/}
        </Link>

          <ReorderIcon className="hamburger" onClick={toggleNavbar} />

      <div className="rightSide" id={openLinks ? "open" : "close"}>           {/* Links to different pages*/}
        <Link to={"/"} className="links">Home</Link>
        <Link to={"/assetspage"} className="links">Assets</Link>
        <Link to={"/transactions"} className="links">History</Link>
        <Link to={"/about"} className="links">About Us</Link>
        <Link to={"/login"} >
          <button> Log in </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
