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
    <>
      <Navbar searchBar={true} />
      <div className="home-content">
        <Sidebar />
        <Notes
          formData={formData}
          setFormData={setFormData}
          notes={filterNotes}
        />
        <div className="desktop-editor">
          <Editor
            formData={formData}
            setFormData={setFormData}
            initialFormData={initialFormData}
          />
        </div>
      </div>
      <br />
      <div className="mobile-editor">
        <Editor
          formData={formData}
          setFormData={setFormData}
          initialFormData={initialFormData}
        />
      </div>
    </>
  );
};

export { Home };
