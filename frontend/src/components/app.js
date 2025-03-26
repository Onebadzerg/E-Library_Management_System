import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login2 from "../Login2";
import BookTable from "./BookTable";
import "../tailwind.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login2 />} />
        <Route path="/books" element={<BookTable />} />
      </Routes>
    </Router>
  );
}

export default App;
