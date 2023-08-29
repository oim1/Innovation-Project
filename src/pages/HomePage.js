import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css"

const Home = () => {
    return (
        <div className="HomePage">
            <body>
                <Navbar />
                <h1 id="MainText">Buy and Exchange<br/>Crypto Tokens Instantly</h1>
            </body>
        </div>
    )
}

export default Home;