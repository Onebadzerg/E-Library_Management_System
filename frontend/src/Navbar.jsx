
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  if (!role) return null;

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-semibold">
        <Link to={role === "ADMIN" ? "/admin/dashboard" : "/user/home"} className="hover:text-yellow-400">
          📚 Library System
        </Link>
      </div>
      <div className="flex items-center gap-6 text-sm">
        {role === "ADMIN" && (
          <>
            <Link to="/admin/books" className="hover:text-yellow-400">Manage Books</Link>
            <Link to="/admin/users" className="hover:text-yellow-400">Manage Users</Link>
            <Link to="/admin/reports" className="hover:text-yellow-400">Reports</Link>
          </>
        )}
        {role === "USER" && (
          <>
            <Link to="/search" className="hover:text-yellow-400">Search</Link>
            <Link to="/borrow-return" className="hover:text-yellow-400">Borrow/Return</Link>
            <Link to="/fines" className="hover:text-yellow-400">Fines</Link>
          </>
        )}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
