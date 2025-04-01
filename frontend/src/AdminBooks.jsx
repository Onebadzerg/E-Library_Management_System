
import React from "react";
import BookTable from "./components/BookTable";

function AdminBooks() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📚 Manage Books</h1>
      <BookTable />
    </div>
  );
}

export default AdminBooks;
