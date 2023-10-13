import React, { useState } from "react";
import "../styles/Login.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
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
      <h1> Sign in </h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleChangeUsername}
        />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />
        <button id="loginButton" type="submit" onSubmit={handleSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
