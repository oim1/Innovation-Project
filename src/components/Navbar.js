import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <p>Logo goes here</p>
            </div>
            <div className="rightSide">
                <Link to={"/"}>Home</Link>
                <Link to={"/assetspage"}>Assets</Link>
                <Link to={"/about"}>About Us</Link>
                <Link to={"/transactions"}>Transactions</Link>
            </div>
        </div>
    )
}

export default Navbar;
