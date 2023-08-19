import React from 'react'
import "../styles/Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <p> Logo goes here </p>
        </div>
        <div className='rightSide'>
            <Link to = "/"> Home </Link>
            <Link to = "/assets"> Assets </Link>
            <Link to = "/transactions"> Transactions </Link>
            <Link to = "/about"> About Us </Link>
        </div>
    </div>
  )
}

export default Navbar;