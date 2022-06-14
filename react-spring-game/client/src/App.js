import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import GameContainer from "./Screens/GameContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<GameContainer />} />
      </Routes>
    </div>
  );
}

export default App;
