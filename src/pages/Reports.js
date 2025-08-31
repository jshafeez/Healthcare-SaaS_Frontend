import React, { useState } from "react";
import "./Reports.css";

export default function Reports() {
  const [reports] = useState([
    {
      id: 1,
      name: "Referral Report - March",
      date: "2025-03-15",
      status: "Completed",
      total: 120,
    },
    {
      id: 2,
      name: "Referral Report - April",
      date: "2025-04-10",
      status: "Pending",
      total: 95,
    },
    {
      id: 3,
      name: "Referral Report - May",
      date: "2025-05-01",
      status: "Cancelled",
      total: 50,
    },
  ]);

  return (
    <div className="reports-page">
      <h2 className="reports-title">Reports Summary</h2>
      <p className="reports-subtitle">Browse through your uploaded reports.</p>

      {/* Search + Filter */}
      <div className="reports-controls">
        <input type="text" placeholder="Search reports..." className="reports-search" />
        <select className="reports-filter">
          <option value="">Filter by status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Reports Table */}
      <div className="reports-table-wrapper">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Date Uploaded</th>
              <th>Status</th>
              <th>Total Referrals</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.date}</td>
                <td>
                  <span className={`status-badge ${r.status.toLowerCase()}`}>
                    {r.status}
                  </span>
                </td>
                <td>{r.total}</td>
                <td className="actions">
                  <button className="btn-view">View</button>
                  <button className="btn-download">Download</button>
                  <button className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
