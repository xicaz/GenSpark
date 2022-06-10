import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Portfolio from "./Screens/Portfolio";
import ProjectContainer from "./Components/ProjectContainer/ProjectContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:project" element={<ProjectContainer />} />
      </Routes>
    </div>
  );
}

export default App;
