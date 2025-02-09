import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import EmployerDashboard from "./components/EmployerDashboard";
import CandidateDashboard from "./components/CandidateDashboard";

import "./App.css";


const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Job Board</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/employer">Employer Dashboard</Link>
            <Link to="/candidate">Candidate Dashboard</Link>

          </nav>
        </header>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer" element={<EmployerDashboard />} />
          <Route path="/candidate" element={<CandidateDashboard />} />
          {/* <Route path="/jobs" element={<JobListings />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;