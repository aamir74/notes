import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./customComponents/Navbar/Navbar.jsx";
import { Archives } from "./pages/archives/Archives";
import { Home } from "./pages/home/Home";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/archives" exact element={<Archives />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
