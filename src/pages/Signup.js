// src/pages/Signup.js
import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  return (
    <div className="auth-container">
      {/* Left Branding Section */}
      <div className="auth-left">
        <h2>Need smarter insights from your data?</h2>
        <h1>Health</h1>
      </div>

      {/* Right Signup Form */}
      <div className="auth-right">
        <h2>Create Account</h2>
        <div className="social-buttons">
          <button className="google">Sign up with Google</button>
          <button className="facebook">Sign up with Facebook</button>
        </div>

        <div className="divider">OR</div>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
