import React, { useState } from "react";
import { Navbar } from "../../customComponents/Navbar/Navbar";
import { useFilter, useNotes } from "../../hooks";
import { pinFilter, searchFilter, sortFilter } from "../../utils";
import { Editor } from "./components/Editor";
import { Notes } from "./components/Notes";
import { Sidebar } from "./components/Sidebar";
import "./Home.css";
const Home = () => {
  const [filteredNotes, setFilteredNotes] = useState([]);
  const initialFormData = {
    id: "",
    title: "",
    content: "",
    color: "",
    type: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const { filterState, filterDispatch } = useFilter();
  const { notesState, notesDispatch } = useNotes();
  const { notes } = notesState;
  let filterNotes = sortFilter(notes, filterState.sortBy);
  filterNotes = searchFilter(filterNotes, filterState.search);
  filterNotes = pinFilter(filterNotes);
  return (
    <div className="home-content">
      <Navbar />
      <Sidebar />
      <Notes
        formData={formData}
        setFormData={setFormData}
        notes={filterNotes}
      />
      <Editor
        formData={formData}
        setFormData={setFormData}
        initialFormData={initialFormData}
      />
    </div>
  );
};

export { Home };
