import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="side-head">
        <Link to="/">
          <button class="btn-text fab-bg-color">
            <i class="fa fa-home fa-lg" aria-hidden="true"></i> Home
          </button>
        </Link>
      </div>
      <div className="side-head">
        <Link to="/archives">
          <button class="btn-text fab-bg-color">
            <i class="fa fa-archive fa-lg" aria-hidden="true"></i> Archive
          </button>
        </Link>
      </div>
      <div className="side-head">
        <Link to="/trash">
          <button class="btn-text fab-bg-color">
            <i class="fa fa-trash fa-lg" aria-hidden="true"></i> Trash
          </button>
        </Link>
      </div>
    </aside>
  );
};

export { Sidebar };
