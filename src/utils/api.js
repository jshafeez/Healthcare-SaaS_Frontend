// frontend/src/utils/api.js
const BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api';

// helper: get auth headers with JWT
function getAuthHeaders() {
  const token = localStorage.getItem("token"); // make sure you store token after login
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// --- File Upload ---
export async function uploadFile(file) {
  const fd = new FormData();
  fd.append("file", file);

  const res = await fetch(`${BASE}/files`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: fd,
  });

  if (!res.ok) throw new Error("Upload failed");
  return res.json();
}

// --- File Preview ---
export async function previewFile(fileId, limit = 100) {
  const res = await fetch(`${BASE}/files/${fileId}/preview?limit=${limit}`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error("Preview failed");
  return res.json();
}

// --- File Ingest ---
export async function ingestFile(fileId) {
  const res = await fetch(`${BASE}/files/${fileId}/ingest`, {
    method: "POST",
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error("Ingest failed");
  return res.json();
}

// --- Fetch Metrics ---
export async function fetchMetrics(params = {}) {
  const q = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE}/metrics?${q}`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error("Metrics failed");
  return res.json();
}

// --- Fetch Insights ---
export async function fetchInsights(params = {}) {
  const q = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE}/insights?${q}`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error("Insights failed");
  return res.json();
}

// --- Customers ---
export async function fetchCustomers() {
  const res = await fetch(`${BASE}/customers`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error("Customers fetch failed");
  return res.json();
}

export async function addCustomer(customer) {
  const res = await fetch(`${BASE}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(customer),
  });
  if (!res.ok) throw new Error("Customer add failed");
  return res.json();
}
