// src/components/Topbar.js
import React from "react";
import { FaBell, FaCog, FaSignOutAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";   // ✅ import Link
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      {/* Left Section - Title */}
      

      {/* Middle Section - Search Bar */}
      <div className="topbar-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      {/* Right Section - Icons + Profile */}
      <div className="topbar-actions">
        <FaBell className="topbar-icon" />

        {/* ✅ Settings Page Link */}
        <Link to="/settings">
          <FaCog className="topbar-icon" />
        </Link>

        {/* ✅ Logout Page Link */}
        <Link to="/logout">
          <FaSignOutAlt className="topbar-icon" />
        </Link>

        <div className="profile-avatar">M</div>
      </div>
    </div>
  );
}
