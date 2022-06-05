import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-16 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="https://dakshas.org/" activeClassName="menu_active">
                Daksha NGO
              </a>
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                    activeClassName="menu_active"
                    className="nav-link active"
                    to="/about">
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
