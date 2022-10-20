import React from "react";
import logo from "../../asset/logo.svg";
import { useState } from "react";
import "../../styles/pages/Home/home.scss";
import searchIcon from "../../asset/search.svg";
import LoggedUI from "../../component/Home/logged";
const Navbar = () => {
    const [logged, setlogged] = useState<boolean | null>(true);
  return (
    <nav className="navbar shadow navbar-expand-lg bg-light  ">
      <div className="container-fluid">
        <img src={logo} className="logo" />
        <button
          className="navbar-toggler collapsed"
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
          className="navbar-collapse collapse px-3 textHome "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav centerNavItems   py-2 col-12">
            <div className="form-control searchBar ">
              <img src={searchIcon} />
              <input placeholder="Search" className="searchInput" />
            </div>

            <li className="nav-item">Explore</li>

            <li className="nav-item dropdown  custom-dropdown">
              <a
                className="nav-link needhover"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                Stats
              </a>
              <ul className="dropdown-menu custom-dropdown-menu">
                <li className="customLi">
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Ranking
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Activity
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">Resources</li>
            <li className="nav-item">Create</li>
            <li className="nav-item">
              {logged ? (
                <LoggedUI />
              ) : (
                <button type="button" className="btn btn-dark loginBtn">
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
