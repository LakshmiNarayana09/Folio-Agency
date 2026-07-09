import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Jobs from "./components/jobs/Jobs";
import Services from "./components/services/Services";

function App() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.replace("#", "")
      );

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<CaseStudy />} />
        </Routes>
    </div>
  );
}

export default App;
