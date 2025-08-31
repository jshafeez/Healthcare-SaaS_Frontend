import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

// Icons
import HomeIcon from '../assets/icons/home.svg';
import UploadIcon from '../assets/icons/upload.svg';
import CustomersIcon from '../assets/icons/customers.svg';
import AnalyticsIcon from '../assets/icons/analytics.svg';
import ReportsIcon from '../assets/icons/reports.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import LogoutIcon from '../assets/icons/logout.svg';
import LogoIcon from '../assets/icons/logo.svg';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button (mobile) */}
      <button className="hamburger" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay for mobile */}
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        {/* Logo */}
        <div className="logo">
          <img src={LogoIcon} alt="Health Logo" className="logo-icon" />
          <span className="logo-text">Health</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" onClick={closeSidebar}>
              <img src={HomeIcon} alt="home" className="icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload" onClick={closeSidebar}>
              <img src={UploadIcon} alt="upload" className="icon" />
              Upload
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" onClick={closeSidebar}>
              <img src={AnalyticsIcon} alt="analytics" className="icon" />
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" onClick={closeSidebar}>
              <img src={CustomersIcon} alt="customers" className="icon" />
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" onClick={closeSidebar}>
              <img src={ReportsIcon} alt="reports" className="icon" />
              Reports
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
