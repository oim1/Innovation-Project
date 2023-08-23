import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div id='navbar'>
            <h1>Navbar Placeholder</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/assetspage"}>Assets</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/transactions"}>Transactions</Link>
        </div>
    )
}

export default Navbar