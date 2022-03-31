import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../hooks";

import "./Navbar.css";
const Navbar = () => {
  const { fiiterState, filterDispatch } = useFilter();
  return (
    <nav className="p-nav">
      {/* <Link to="/"> */}
      <div className="logo">
        <i className="fa  fa-file-text" aria-hidden="true"></i>
        <h2>Notes</h2>
      </div>
      {/* </Link> */}
      <div className="nav-search">
        <input
          id="searchbar"
          className="textbox"
          type="email"
          placeholder="Search By Title"
          onChange={(e) =>
            filterDispatch({ type: "SEARCH", search: e.target.value })
          }
        />
      </div>
    </nav>
  );
};

export { Navbar };
