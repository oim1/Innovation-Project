import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../../public/assets/logos/coinwave.png"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <Link to={"/"}>
                    <img src={logo} alt="coinwave logo"/>
                </Link>
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
