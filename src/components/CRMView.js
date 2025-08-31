// frontend/src/components/CRMView.js
import React, { useEffect, useState } from "react";
import "./CRMView.css";

export default function CRMView() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching customers:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (customers.length === 0) return <p>No customers found</p>;

  return (
    <div className="crm-container">
      <h2>Customer Management</h2>
      <div className="customer-list">
        {customers.map((c) => (
          <div className="customer-card" key={c.id}>
            <h3>{c.name || "Unnamed"}</h3>
            <p>Email: {c.email || "N/A"}</p>
            <p>Phone: {c.phone || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
