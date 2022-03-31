import React from "react";
import { NotesCard } from "../../../customComponents/Card/NotesCard";
import { useNotes } from "../../../hooks";

const Notes = ({ formData, setFormData }) => {
  const a = (
    <h2>
      <u>Solve Bugs</u>
    </h2>
  );
  const { notesState, notesDispatch } = useNotes();
  const { notes } = notesState;

  return (
    <div className="notes">
      <p className="h6 bold">Pinned</p>
      {notes && notes.length ? (
        notes.map((item) => (
          <NotesCard
            key={item._id}
            id={item._id}
            type="pinned"
            title={item.title}
            content={item.content}
            date={item.date}
            color={item.color}
            setFormData={setFormData}
            note={item}
          />
        ))
      ) : (
        <p className="h6 bold">Create Notes</p>
      )}
    </div>
  );
};

export { Notes };
