// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

// Pages
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Customers from './pages/Customers';
import Analytics from './pages/Analytics';  // ✅ moved from components -> pages
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => {
    if (isMobile) setSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true); // always open on desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className={`app-layout ${sidebarOpen && !isMobile ? 'sidebar-open' : ''}`}>
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          closeSidebar={closeSidebar}
        />

        {/* Main Content */}
        <div className="main-layout">
          <Topbar isSidebarOpen={sidebarOpen} isMobile={isMobile} />
          <div className="page-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
