import React from "react";
import logo from "../asset/logo.svg";
import "../styles/pages/Temp.scss";
import searchIcon from "../asset/search.svg"
const temp: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img src={logo} />
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
          <ul className="navbar-nav centerNavItems   py-3 col-12">
            <div className="form-control searchBar ">
            <img src={searchIcon}/>
            <input placeholder="Search"  className="searchInput"/>
            </div>
            
              <li className="nav-item">Explore</li>
              <li className="nav-item">Stats</li>
              <li className="nav-item">Resources</li>
              <li className="nav-item">Create</li>
              <li className="nav-item">
                <button type="button" className="btn btn-dark loginBtn">
                  Login
                </button>
              </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default temp;
