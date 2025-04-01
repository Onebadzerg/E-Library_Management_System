
import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📘 Admin Dashboard</h1>
      <div className="space-y-4">
        <Link to="/admin/books" className="block p-4 bg-blue-100 rounded hover:bg-blue-200">📚 Manage Books</Link>
        <Link to="/admin/users" className="block p-4 bg-blue-100 rounded hover:bg-blue-200">👥 Manage Users</Link>
        <Link to="/admin/reports" className="block p-4 bg-blue-100 rounded hover:bg-blue-200">📊 View Reports</Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
