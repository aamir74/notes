import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./customComponents/Navbar/Navbar.jsx";
import { Archives } from "./pages/archives/Archives";
import { Home } from "./pages/home/Home";
import { Trash } from "./pages/trash/Trash"

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/archives" exact element={<Archives />} />
          <Route path="/trash" exact element={<Trash />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
