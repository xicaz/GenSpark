import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Games from "./Screens/Games";
import Login from "./Screens/LoginScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
