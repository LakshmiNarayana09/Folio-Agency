import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<CaseStudy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
