import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Archives } from "./pages/archives/Archives";
import { Home } from "./pages/home/Home";
import { Trash } from "./pages/trash/Trash";
import { Login } from "./pages/auth/Login.jsx";
import { Signup } from "./pages/auth/Signup.jsx";

import "./App.css";
import Toast from "./customComponents/notification/Toast";

function App() {
  return (
    <>
      <Toast />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/archives" exact element={<Archives />} />
          <Route path="/trash" exact element={<Trash />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
