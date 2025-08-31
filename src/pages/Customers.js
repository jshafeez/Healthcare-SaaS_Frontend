// src/pages/Customers.js
import React from "react";
import './Customers.css';

const sampleCustomers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+91 9876543210",
    referredBy: "Dr. Smith",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    phone: "+91 9123456780",
    referredBy: "Dr. Johnson",
    status: "Pending",
  },
  {
    id: 3,
    name: "Robert Brown",
    email: "robert.brown@email.com",
    phone: "+91 9988776655",
    referredBy: "Dr. Lee",
    status: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    phone: "+91 9090909090",
    referredBy: "Dr. Patel",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Michael Wilson",
    email: "michael.wilson@email.com",
    phone: "+91 9876501234",
    referredBy: "Dr. Kumar",
    status: "Active",
  },
  {
    id: 6,
    name: "Sophia Taylor",
    email: "sophia.taylor@email.com",
    phone: "+91 9123405678",
    referredBy: "Dr. Mehta",
    status: "Pending",
  },
  {
    id: 7,
    name: "Daniel Anderson",
    email: "daniel.anderson@email.com",
    phone: "+91 9765432109",
    referredBy: "Dr. Gupta",
    status: "Active",
  },
  {
    id: 8,
    name: "Olivia Thomas",
    email: "olivia.thomas@email.com",
    phone: "+91 9345678901",
    referredBy: "Dr. Verma",
    status: "Inactive",
  },
];

const Customers = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">Customers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleCustomers.map((customer) => (
          <div
            key={customer.id}
            className="bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-medium">{customer.name}</h3>
            <p className="text-sm text-gray-600">{customer.email}</p>
            <p className="text-sm text-gray-600">{customer.phone}</p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Referred By:</span> {customer.referredBy}
            </p>
            <span
              className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
                customer.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : customer.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {customer.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
