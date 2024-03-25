import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import ProductDetail from "./Pages/ProductDetail.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

// https://66017126172358124fb55766--cerulean-bublanina-b0d92b.netlify.app/  this is the link to the project
