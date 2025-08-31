// src/pages/Settings.js
import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>

      {/* Sidebar Tabs */}
      <div className="settings-layout">
        <div className="settings-tabs">
          <button
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={activeTab === "notifications" ? "active" : ""}
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </button>
          <button
            className={activeTab === "referrals" ? "active" : ""}
            onClick={() => setActiveTab("referrals")}
          >
            Referrals
          </button>
          <button
            className={activeTab === "security" ? "active" : ""}
            onClick={() => setActiveTab("security")}
          >
            Security
          </button>
          <button
            className={activeTab === "appearance" ? "active" : ""}
            onClick={() => setActiveTab("appearance")}
          >
            Appearance
          </button>
          <button
            className={activeTab === "data" ? "active" : ""}
            onClick={() => setActiveTab("data")}
          >
            Data
          </button>
        </div>

        {/* Content Section */}
        <div className="settings-content">
          {activeTab === "profile" && (
            <div className="settings-section">
              <h3>Profile & Account</h3>
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
              <label>Email</label>
              <input type="email" placeholder="john@example.com" />
              <label>Phone</label>
              <input type="text" placeholder="+91 9876543210" />
              <label>Password</label>
              <input type="password" placeholder="********" />
              <button className="save-btn">Save Changes</button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="settings-section">
              <h3>Notifications</h3>
              <label>
                <input type="checkbox" /> Email Notifications
              </label>
              <label>
                <input type="checkbox" /> SMS Alerts
              </label>
              <label>
                <input type="checkbox" /> Weekly Summary Reports
              </label>
              <button className="save-btn">Save Preferences</button>
            </div>
          )}

          {activeTab === "referrals" && (
            <div className="settings-section">
              <h3>Referral Settings</h3>
              <label>Default Referral Status</label>
              <select>
                <option>Pending</option>
                <option>Accepted</option>
                <option>In Progress</option>
              </select>
              <label>Assign To</label>
              <select>
                <option>Dr. Smith</option>
                <option>Dr. Patel</option>
                <option>Receptionist</option>
              </select>
              <button className="save-btn">Update Referrals</button>
            </div>
          )}

          {activeTab === "security" && (
            <div className="settings-section">
              <h3>Security Settings</h3>
              <label>
                <input type="checkbox" /> Enable Two-Factor Authentication
              </label>
              <label>Session Timeout</label>
              <select>
                <option>15 min</option>
                <option>30 min</option>
                <option>1 hour</option>
              </select>
              <button className="save-btn">Update Security</button>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="settings-section">
              <h3>Appearance</h3>
              <label>
                <input type="radio" name="theme" /> Light Mode
              </label>
              <label>
                <input type="radio" name="theme" /> Dark Mode
              </label>
              <label>
                <input type="radio" name="theme" /> System Default
              </label>
              <button className="save-btn">Apply Theme</button>
            </div>
          )}

          {activeTab === "data" && (
            <div className="settings-section">
              <h3>Data & Reports</h3>
              <button className="export-btn">Export Data (CSV)</button>
              <button className="export-btn">Export Data (PDF)</button>
              <button className="danger-btn">Clear All Data</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
