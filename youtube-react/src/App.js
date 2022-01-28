import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Top from "./pages/Top";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
function App() {
  return (
    <Router>
      <Route path="/" element={<Top />} />
      <Route path="/search" element={<Search />} />
      <Route path="/watch" element={<Watch />} />
    </Router>
  );
}

export default App;
