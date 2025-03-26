import React, { useState, useEffect } from "react";

const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedBooks = [...books].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setBooks(sortedBooks);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.includes(searchTerm)
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">📚 Library Management System</h1>

      {/* Search Input */}
      <div className="mb-4 w-1/2">
        <input
          type="text"
          placeholder="🔍 Search by title, author, or ISBN..."
          className="w-full p-3 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-400 transition-all duration-200"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Table */}
      <div className="w-3/4 overflow-x-auto">
        <table className="w-full border border-gray-600 rounded-lg overflow-hidden shadow-lg bg-gray-800">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-3 cursor-pointer hover:bg-gray-600" onClick={() => handleSort("isbn")}>
                ISBN 🔢
              </th>
              <th className="p-3 cursor-pointer hover:bg-gray-600" onClick={() => handleSort("title")}>
                Title 📖
              </th>
              <th className="p-3 cursor-pointer hover:bg-gray-600" onClick={() => handleSort("author")}>
                Author ✍️
              </th>
              <th className="p-3 cursor-pointer hover:bg-gray-600" onClick={() => handleSort("quantity")}>
                Quantity 📦
              </th>
              <th className="p-3 cursor-pointer hover:bg-gray-600" onClick={() => handleSort("status")}>
                Status ✅
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr key={book.id} className="border-b border-gray-600 hover:bg-gray-700 transition-all">
                  <td className="p-3 text-center">{book.isbn}</td>
                  <td className="p-3 text-center">{book.title}</td>
                  <td className="p-3 text-center">{book.author}</td>
                  <td className="p-3 text-center">{book.quantity}</td>
                  <td className="p-3 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        book.status === "Available" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                      }`}
                    >
                      {book.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-400">
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookTable;
