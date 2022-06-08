import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Account from "./Components/Account/Account";
import Form from "./Components/WebForm/WebForm";
import Main from "./Screen/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
