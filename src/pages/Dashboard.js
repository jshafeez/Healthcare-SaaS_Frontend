import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";
import "./Dashboard.css";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [a, setA] = useState(null);
  const [i, setI] = useState(null);

  // demo fallback data (shows even if backend not connected)
  const demoAnalytics = {
    totals: { total: 320, completed: 190, pending: 90, conversionRate: 59 },
    dailyTrend: [
      { day: "Mon", value: 10 }, { day: "Tue", value: 14 },
      { day: "Wed", value: 18 }, { day: "Thu", value: 20 },
      { day: "Fri", value: 12 }, { day: "Sat", value: 22 },
      { day: "Sun", value: 15 },
    ],
    bySource: [
      { name: "Email", value: 100 },
      { name: "Website", value: 120 },
      { name: "Social", value: 70 },
      { name: "Other", value: 30 },
    ],
    byStatus: [
      { name: "Completed", value: 190 },
      { name: "Pending", value: 90 },
      { name: "Cancelled", value: 40 },
    ],
  };

  const demoInsights = {
    insights: [
      "Email referrals converted 20% better than Social.",
      "Website traffic shows steady growth over weekdays.",
    ],
    todos: [
      { task: "Follow up with pending referrals", time: "Today" },
      { task: "Review cancelled cases", time: "This week" },
    ],
  };

  useEffect(() => {
    // simulate loading backend
    setTimeout(() => {
      setA(demoAnalytics);
      setI(demoInsights);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) return <div className="a-loading">Loading analytics…</div>;
  if (!a) return <div className="a-loading">No data.</div>;

  const COLORS = ["#4f46e5", "#9333ea", "#06b6d4", "#16a34a", "#f59e0b", "#ef4444"];

  return (
    <div className="dashboard-page">
      <h2 className="a-title">Total Referrals Analytics</h2>

      {/* KPIs */}
      <div className="a-kpi-grid">
        <div className="a-kpi">
          <div className="a-kpi-label">Total Referrals</div>
          <div className="a-kpi-value">{a.totals.total}</div>
          <div className="a-mini">
            <ResponsiveContainer width="100%" height={60}>
              <BarChart data={a.dailyTrend}>
                <Bar dataKey="value" radius={[6,6,0,0]} fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="a-kpi">
          <div className="a-kpi-label">Completed</div>
          <div className="a-kpi-value">{a.totals.completed}</div>
          <div className="a-subtext">Conversion {a.totals.conversionRate}%</div>
        </div>

        <div className="a-kpi">
          <div className="a-kpi-label">Pending</div>
          <div className="a-kpi-value">{a.totals.pending}</div>
          <div className="a-subtext">Awaiting action</div>
        </div>
      </div>

      {/* Charts */}
      <div className="a-grid">
        <div className="a-card">
          <div className="a-card-title">Daily Referrals</div>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={a.dailyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="a-card">
          <div className="a-card-title">Referrals by Source</div>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={a.bySource} dataKey="value" nameKey="name" outerRadius={90} label>
                {a.bySource.map((_, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="a-card">
          <div className="a-card-title">Referrals by Status</div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={a.byStatus}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#10b981" radius={[8,8,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights + To-dos */}
      <div className="a-bottom">
        <div className="a-card">
          <div className="a-card-title">Insights</div>
          <ul className="a-insights">
            {i.insights.map((t, k) => <li key={k}>{t}</li>)}
          </ul>
        </div>

        <div className="a-card">
          <div className="a-card-title">Your To-do list</div>
          <ul className="a-todos">
            {i.todos.map((t, k) => (
              <li key={k}>
                <span className="a-dot" />
                <div>
                  <div className="a-task">{t.task}</div>
                  <div className="a-time">{t.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
