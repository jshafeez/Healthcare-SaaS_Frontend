import React, { useEffect, useState } from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis,
  Tooltip, CartesianGrid, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import "./Analytics.css";

export default function Analytics() {
  const [data, setData] = useState(null);
  const [insights, setInsights] = useState("");
  const [loading, setLoading] = useState(true);

  const demoData = {
    totals: { total: 120, completed: 70, pending: 40, cancelled: 10, conversionRate: 58 },
    dailyTrend: [
      { day: "Mon", value: 6 }, { day: "Tue", value: 9 },
      { day: "Wed", value: 12 }, { day: "Thu", value: 15 },
      { day: "Fri", value: 11 },
    ],
    bySource: [
      { name: "Email", value: 40 },
      { name: "Website", value: 50 },
      { name: "Social", value: 20 },
      { name: "Other", value: 10 },
    ],
    byStatus: [
      { name: "Completed", value: 70 },
      { name: "Pending", value: 40 },
      { name: "Cancelled", value: 10 },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      setData(demoData);
      setInsights("Website traffic is consistently outperforming Social referrals.");
      setLoading(false);
    }, 700);
  }, []);

  if (loading) return <p>Loading analytics...</p>;
  if (!data) return <p>No analytics available.</p>;

  return (
    <div className="analytics-page">
      <h2>Analytics for Latest Upload</h2>

      {/* Summary */}
      <div className="summary-cards">
        <div className="card">Total Referrals: {data.totals.total}</div>
        <div className="card">Completed: {data.totals.completed}</div>
        <div className="card">Pending: {data.totals.pending}</div>
        <div className="card">Cancelled: {data.totals.cancelled}</div>
        <div className="card">Conversion Rate: {data.totals.conversionRate}%</div>
      </div>

      {/* Trend */}
      <div className="chart-container">
        <h3>Daily Referrals</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.dailyTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Source */}
      <div className="chart-container">
        <h3>Referrals by Source</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data.bySource} dataKey="value" nameKey="name" outerRadius={120} label>
              {data.bySource.map((entry, idx) => (
                <Cell key={idx} fill={["#2563eb", "#10b981", "#f59e0b", "#ef4444"][idx % 4]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Status */}
      <div className="chart-container">
        <h3>Referrals by Status</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.byStatus}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className="insights-card">
        <h3>Insights</h3>
        <p>{insights}</p>
      </div>
    </div>
  );
}
