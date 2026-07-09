import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Jobs from "./components/jobs/Jobs";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<CaseStudy />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
