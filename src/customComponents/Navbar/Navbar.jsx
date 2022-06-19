import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import { useNotifications } from "reapop";
import { useAuth, useFilter } from "../../hooks";
import CookieHelper from "../../utils/cookies/cookieHelper";

import "./Navbar.css";
const Navbar = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const { fiiterState, filterDispatch } = useFilter();
  const { authState, authDispatch } = useAuth();
  const token = authState.auth;

  const handleLogout = () => {
    const cookieHelper = new CookieHelper();
    cookieHelper.setCookie("", null, -365);
    authDispatch({ type: "DELETE_USER_DATA" });
    notify({
      title: <h3> Success :)</h3>,
      message: <h5>Logged out successfully </h5>,
      status: "success",
      dismissible: true,
      dismissAfter: 5000,
      showDismissButton: true,
      position: "bottom-left",
    });
    navigate("/login");
  };

  return (
    <nav className="p-nav">
      <Link to="/">
        <div className="logo">
          <i className="fa fa-file-text fa-lg" aria-hidden="true"></i>
          <h2>Scribble</h2>
        </div>
      </Link>
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
      <div className="nav-icons">
        {token ? (
          <button onClick={handleLogout} className="btn-text  btn-color">
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn-text btn-primary btn-bg-color">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
