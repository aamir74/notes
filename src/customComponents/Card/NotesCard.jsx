import React from "react";
import HtmlParser from "react-html-parser/lib/HtmlParser";
import { useNotifications } from "reapop";
import { useAuth, useFilter, useNotes } from "../../hooks";
import {
  addToArchive,
  deleteFromArchive,
  removeFromArchive,
  updateNote,
} from "../../services";

const NotesCard = ({
  type,
  id,
  title,
  content,
  date,
  color,
  setFormData,
  note,
  pinned,
}) => {
  const { notify } = useNotifications();
  const { notesState, notesDispatch } = useNotes();
  const { filterState, filterDispatch } = useFilter();
  const { authState, authDispatch } = useAuth();
  const token = authState.auth;

  const handleAddToArchive = async (note) => {
    try {
      if (!token) throw { message: "User not loggeg in" };
      const res = await addToArchive(note._id, note);
      if (res.status === 201) {
        notesDispatch({
          type: "HANDLE_ARCHIVE",
          payload: {
            notes: res.data.notes,
            archives: res.data.archives,
          },
        });
        notify({
          title: <h3> Success :)</h3>,
          message: <h5>Note added to archive</h5>,
          status: "success",
          dismissible: true,
          dismissAfter: 5000,
          showDismissButton: true,
          position: "bottom-left",
        });
      }
    } catch (err) {
      console.log(err);
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Please Login to add to archive</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }
  };

  const handleRemoveFromArchive = async (note) => {
    try {
      if (!token) throw { message: "User not loggeg in" };
      const res = await removeFromArchive(note._id, note);
      if (res.status === 200) {
        notesDispatch({
          type: "HANDLE_ARCHIVE",
          payload: {
            notes: res.data.notes,
            archives: res.data.archives,
          },
        });
        notify({
          title: <h3> Success :)</h3>,
          message: <h5>Note removed from archive</h5>,
          status: "success",
          dismissible: true,
          dismissAfter: 5000,
          showDismissButton: true,
          position: "bottom-left",
        });
      }
    } catch (err) {
      console.log(err);
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Please Login to remove from archive</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }
  };

  const handleMoveToTrash = async (note) => {
    try {
      if (!token) throw { message: "User not loggeg in" };
      const res = await deleteFromArchive(note._id);
      if (res.status === 200) {
        notesDispatch({
          type: "HANDLE_TRASH",
          payload: {
            trash: note,
            archives: res.data.archives,
          },
        });
        notify({
          title: <h3> Success :)</h3>,
          message: <h5>Note moved to trash</h5>,
          status: "success",
          dismissible: true,
          dismissAfter: 5000,
          showDismissButton: true,
          position: "bottom-left",
        });
      }
    } catch (err) {
      console.log(err);
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Please Login to move to trash</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }
  };

  const handlePinNote = async (note) => {
    const res = await updateNote(note._id, { ...note, pinned: !pinned });
    if (res.status === 201) {
      notesDispatch({ type: "UPDATE_NOTES", payload: res.data.notes });
      filterDispatch({ type: "PINNED" });
    }
  };

  return (
    <div className="card text-card" style={{ backgroundColor: color }}>
      <div className="notes-title">
        <p className="h7 bold">{title}</p>
        <i
          className="fa fa-thumb-tack fa-md"
          aria-hidden="true"
          style={pinned ? { color: "#4caf50" } : { color: "#353b47" }}
          onClick={() => handlePinNote(note)}
        ></i>
      </div>
      <div className="notes-title">{HtmlParser(content)}</div>
      <div className="notes-title footer">
        <p className="text-sm">{date}</p>
        {type === "trash" ? (
          ""
        ) : (
          <div className="options">
            {type !== "archive" && (
              <>
                <i
                  className="fa fa-edit fa-lg"
                  aria-hidden="true"
                  onClick={() =>
                    setFormData({
                      id,
                      title,
                      content,
                      color,
                      type: "edit",
                      date,
                    })
                  }
                ></i>
                <i
                  className="fa fa-archive fa-lg"
                  aria-hidden="true"
                  onClick={() => handleAddToArchive(note)}
                ></i>
              </>
            )}
            {type === "archive" && (
              <>
                <i
                  title="restore"
                  className="fa fa-arrow-left fa-lg"
                  aria-hidden="true"
                  onClick={() => handleRemoveFromArchive(note)}
                ></i>

                <i
                  className="fa fa-trash fa-lg"
                  aria-hidden="true"
                  onClick={() => handleMoveToTrash(note)}
                ></i>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { NotesCard };
