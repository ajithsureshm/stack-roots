import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

        <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Navigate to="/home" />}    />
            
         
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
