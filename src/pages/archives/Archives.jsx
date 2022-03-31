import React from "react";
import { NotesCard } from "../../customComponents/Card/NotesCard";
import { useNotes } from "../../hooks";
import { Sidebar } from "../home/components/Sidebar";

import "./Archives.css";
const Archives = () => {
  const { notesState } = useNotes();
  const { archives } = notesState;
  return (
    <>
      <div className="archives-content">
        <Sidebar />
        <div className="archives">
          <p className="h6 bold">Archives</p>
          {archives.length ? (
            archives.map((item) => (
              <NotesCard
                key={item._id}
                id={item._id}
                type="archive"
                title={item.title}
                content={item.content}
                date={item.date}
                color={item.color}
                note={item}
              />
            ))
          ) : (
            <p className="h6 bold">No archived notes</p>
          )}
        </div>
      </div>
    </>
  );
};

export { Archives };
