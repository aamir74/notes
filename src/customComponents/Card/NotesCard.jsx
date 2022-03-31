import React from "react";
import HtmlParser from "react-html-parser/lib/HtmlParser";
import { useFilter, useNotes } from "../../hooks";
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
  const { notesState, notesDispatch } = useNotes();
  const { filterState, filterDispatch } = useFilter();

  const handleAddToArchive = async (note) => {
    const res = await addToArchive(note._id, note);
    if (res.status === 201)
      notesDispatch({
        type: "HANDLE_ARCHIVE",
        payload: {
          notes: res.data.notes,
          archives: res.data.archives,
        },
      });
  };

  const handleRemoveFromArchive = async (note) => {
    const res = await removeFromArchive(note._id, note);
    if (res.status === 200)
      notesDispatch({
        type: "HANDLE_ARCHIVE",
        payload: {
          notes: res.data.notes,
          archives: res.data.archives,
        },
      });
  };

  const handleMoveToTrash = async (note) => {
    const res = await deleteFromArchive(note._id);
    console.log("removee", res);
    if (res.status === 200)
      notesDispatch({
        type: "HANDLE_TRASH",
        payload: {
          trash: note,
          archives: res.data.archives,
        },
      });
    console.log("sss", notesState);
  };

  const handlePinNote = async (note) => {
    const res = await updateNote(note._id, { ...note, pinned: !pinned });
    console.log(res);
    if (res.status === 201) {
      notesDispatch({ type: "UPDATE_NOTES", payload: res.data.notes });
      filterDispatch({ type: "PINNED" });
    }
  };

  return (
    <div class="card text-card" style={{ backgroundColor: color }}>
      <div className="notes-title">
        <p className="h7 bold">{title}</p>
        <i
          class="fa fa-thumb-tack fa-md"
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
                  class="fa fa-edit fa-lg"
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
                  class="fa fa-archive fa-lg"
                  aria-hidden="true"
                  onClick={() => handleAddToArchive(note)}
                ></i>
              </>
            )}
            {type === "archive" && (
              <>
                <i
                  title="restore"
                  class="fa fa-arrow-left fa-lg"
                  aria-hidden="true"
                  onClick={() => handleRemoveFromArchive(note)}
                ></i>

                <i
                  class="fa fa-trash fa-lg"
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
