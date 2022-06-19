import React from "react";
import { NotesCard } from "../../../customComponents/Card/NotesCard";
import { useFilter, useNotes } from "../../../hooks";

const Notes = ({ formData, setFormData,notes }) => {

  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="notes">
      <div className="note-head">
        <p className="h6 bold">Pinned</p>
        <span className="note-head">
          <p className="h6 bold">Sort By Date</p>
          <button
            className="btn-text fab-bg-color"
            onClick={() => filterDispatch({ type: "ASC" })}
          >
            Asc
          </button>
          <button
            className="btn-text fab-bg-color"
            onClick={() => filterDispatch({ type: "DESC" })}
          >
            Desc
          </button>
        </span>
      </div>

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
            pinned={item.pinned}
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
