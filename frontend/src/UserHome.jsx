
import React from "react";
import { Link } from "react-router-dom";

function UserHome() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📗 User Home</h1>
      <div className="space-y-4">
        <Link to="/search" className="block p-4 bg-green-100 rounded hover:bg-green-200">🔍 Search Books</Link>
        <Link to="/borrow-return" className="block p-4 bg-green-100 rounded hover:bg-green-200">📖 Borrow / Return</Link>
        <Link to="/fines" className="block p-4 bg-green-100 rounded hover:bg-green-200">💰 View Fines</Link>
      </div>
    </div>
  );
}

export default UserHome;
