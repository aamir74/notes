import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="side-head">
        <Link to="/">
          <button className="btn-text fab-bg-color">
            <i className="fa fa-home fa-lg" aria-hidden="true"></i> Home
          </button>
        </Link>
      </div>
      <div className="side-head">
        <Link to="/archives">
          <button className="btn-text fab-bg-color">
            <i className="fa fa-archive fa-lg" aria-hidden="true"></i> Archive
          </button>
        </Link>
      </div>
      <div className="side-head">
        <Link to="/trash">
          <button className="btn-text fab-bg-color">
            <i className="fa fa-trash fa-lg" aria-hidden="true"></i> Trash
          </button>
        </Link>
      </div>
    </aside>
  );
};

export { Sidebar };
