// src/pages/Login.js
import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  return (
    <div className="auth-container">
      {/* Left Branding Section */}
      <div className="auth-left">
        <h2>Need smarter insights from your data?</h2>
        <h1>Health</h1>
      </div>

      {/* Right Login Form */}
      <div className="auth-right">
        <h2>Sign-in</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <p>
          Don’t have an account? <Link to="/signup">Signup Here</Link>
        </p>
      </div>
    </div>
  );
}
