import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="HomePage">
      <body>
        <h1 id="MainText">
          Buy and Exchange
          <br />
          Digital Assets Instantly
        </h1>
        <Link to={"/assetspage"}>
          <button id="GetStarted">Get Started!</button>
        </Link>
      </body>
    </div>
  );
};

export default Home;
