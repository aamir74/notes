import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNotes } from "../../../hooks";
import { addNote, updateNote } from "../../../services";
import { modules } from "./quill-modules";

const Editor = ({ formData, setFormData, initialFormData }) => {
  const { notesState, notesDispatch } = useNotes();
  let res;
  const handleSubmit = async (e) => {
    try {
      const date = new Date().toLocaleString();
      let title = formData.title;
      title = title ? title : "My Note";

      const note = { ...formData, date, title, pinned: false };
      if (formData.type === "edit") {
        res = await updateNote(formData.id, note);
        if (res.status === 201)
          notesDispatch({ type: "UPDATE_NOTES", payload: res.data.notes });
      } else {
        res = await addNote(note);
        if (res.status === 201)
          notesDispatch({ type: "ADD_NOTES", payload: res.data.notes });
      }
      if (res.status === 201) setFormData(initialFormData);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("notes", notesState);
  return (
    <div className="editor">
      <div className="nav-search">
        <input
          name="title"
          id="searchbar"
          className="textbox"
          type="text"
          placeholder="Enter Title"
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div className="quill-editor" style={{ backgroundColor: formData.color }}>
        <ReactQuill
          name="content"
          theme="snow"
          modules={modules}
          value={formData.content}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, content: e }));
          }}
          placeholder="Enter Content"
        />
      </div>
      <div className="color">
        Choose Color
        <span
          class="letter-avatar"
          style={{ backgroundColor: "#d5f1de" }}
          onClick={() => setFormData((prev) => ({ ...prev, color: "#d5f1de" }))}
        ></span>
        <span
          class="letter-avatar"
          style={{ backgroundColor: "#fadddd" }}
          onClick={() => setFormData((prev) => ({ ...prev, color: "#fadddd" }))}
        ></span>
        <span
          class="letter-avatar"
          style={{ backgroundColor: "#fde8b9" }}
          onClick={() => setFormData((prev) => ({ ...prev, color: "#fde8b9" }))}
        ></span>
        <span
          class="letter-avatar"
          style={{ backgroundColor: "#d6ebff" }}
          onClick={() => setFormData((prev) => ({ ...prev, color: "#d6ebff" }))}
        ></span>
      </div>
      <br />
      <div className="color">
        <button
          class="btn-text btn-primary btn-bg-color"
          onClick={handleSubmit}
        >
          {formData.type === "edit" ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export { Editor };
