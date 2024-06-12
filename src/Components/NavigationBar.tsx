import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand font-weight-bold" to="/">
            Use of React Router
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link font-weight-bold" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link font-weight-bold" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link font-weight-bold" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
