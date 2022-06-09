import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNotifications } from "reapop";
import { useAuth, useNotes } from "../../../hooks";
import { addNote, updateNote } from "../../../services";
import { modules } from "./quill-modules";

const Editor = ({ formData, setFormData, initialFormData }) => {
  const { notify } = useNotifications();
  const { notesState, notesDispatch } = useNotes();
  const { authState, authDispatch } = useAuth();
  const token = authState.auth;

  const handleSubmit = async (e) => {
    try {
      if (!token) throw { message: "User not loggeg in" };
      let res;
      const date = new Date().toLocaleString();
      let title = formData.title;
      title = title ? title : "My Note";

      const note = { ...formData, date, title, pinned: false };
      if (formData.type === "edit") {
        res = await updateNote(formData.id, note);
        if (res.status === 201) {
          notesDispatch({ type: "UPDATE_NOTES", payload: res.data.notes });
          notify({
            title: <h3> Success :)</h3>,
            message: <h5>Note Updated</h5>,
            status: "success",
            dismissible: true,
            dismissAfter: 5000,
            showDismissButton: true,
            position: "bottom-left",
          });
        }
      } else {
        res = await addNote(note);
        if (res.status === 201) {
          notesDispatch({ type: "ADD_NOTES", payload: res.data.notes });
          notify({
            title: <h3> Success :)</h3>,
            message: <h5>Note Addeed</h5>,
            status: "success",
            dismissible: true,
            dismissAfter: 5000,
            showDismissButton: true,
            position: "bottom-left",
          });
        }
      }
      if (res.status === 201) setFormData(initialFormData);
    } catch (err) {
      console.log(err);
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Please Login to add Notes</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }
  };
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
