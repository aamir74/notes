import React from "react";
import { NotesCard } from "../../customComponents/Card/NotesCard";
import { Navbar } from "../../customComponents/Navbar/Navbar";
import { useNotes } from "../../hooks";
import { Sidebar } from "../home/components/Sidebar";

import "./Trash.css";
const Trash = () => {
  const { notesState } = useNotes();
  const { trash } = notesState;
  return (
    <>
      <Navbar searchBar={false} />
      <div className="trash-content">
        <Sidebar />
        <div className="trash">
          <p className="h6 bold">Trash</p>
          {trash.length ? (
            trash.map((item) => (
              <NotesCard
                key={item._id}
                id={item._id}
                type="trash"
                title={item.title}
                content={item.content}
                date={item.date}
                color={item.color}
                note={item}
              />
            ))
          ) : (
            <p className="h6 bold">No trash found</p>
          )}
        </div>
      </div>
    </>
  );
};

export { Trash };
