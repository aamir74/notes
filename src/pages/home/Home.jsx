import React, { useState } from "react";
import { Navbar } from "../../customComponents/Navbar/Navbar";
import { Editor } from "./components/Editor";
import { Notes } from "./components/Notes";
import { Sidebar } from "./components/Sidebar";
import "./Home.css";
const Home = () => {
  const initialFormData = {
    id: "",
    title: "",
    content: "",
    color: "",
    type: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  return (
    <div className="home-content">
      <Navbar />
      <Sidebar />
      <Notes formData={formData} setFormData={setFormData} />
      <Editor
        formData={formData}
        setFormData={setFormData}
        initialFormData={initialFormData}
      />
    </div>
  );
};

export { Home };
