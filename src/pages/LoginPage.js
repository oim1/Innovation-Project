import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/assets/logos/coinwave.png";
import "../styles/pages/Login.css";


function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {   {/*Alert a message when the login form is submitted*/}
    e.preventDefault();
    if (username === "") alert("Username missing, please try again.");
    else if (password === "") alert("Password missing, please try again.");
    else alert("Logged in successfully!");
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="loginPage">
      <Link to={"/"}>
          <img src={logo} alt="coinwave logo" /> {/*CoinWAVE logo*/}
      </Link>
      
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1> Sign in </h1>
        <label for="username">Username</label>
        <input
          className="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleChangeUsername}
        />
        <label for="password">Password</label>
        <input
          className="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />
        <button className="loginButton" type="submit" onSubmit={handleSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
