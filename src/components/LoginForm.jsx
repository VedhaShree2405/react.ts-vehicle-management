import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onLoginSubmit = (event) => {
    event.preventDefault();
    if (username == "test" && password == "123") {
      navigate("/home");
    } else {
      setError("Enter valid username and password");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={onLoginSubmit}>
        <h1>Login</h1>
        <div className="login-input">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="login-input">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
