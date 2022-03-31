import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./customComponents/Navbar/Navbar.jsx";

import { Home } from "./pages/home/Home";


import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
