import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
