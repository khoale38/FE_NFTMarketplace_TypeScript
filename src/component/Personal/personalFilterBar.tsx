import React from "react";
import searchIcon from "../../asset/search.svg";
import "../../styles/pages/Collection/filterBar.scss";
import Refesh from "../../asset/refresh.svg";
const personalFilterBar = (props: any) => {
  return (
    <div className="d-flex  filterbar mx-5 my-3">
      <div className="d-flex flex-fill">
        <div className="form-control searchBar ">
          <img src={searchIcon}  alt="search"/>
          <input
            placeholder="Search"
            className="searchInput px-2"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                props.onSearchChange(e.currentTarget.value);
                e.currentTarget.value = "";
                e.currentTarget.blur();
              }
            }}
          />
        </div>
        <div className="dropdown px-3">
          <button
            className="btn  filter-button filter-text dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Newest to Oldest
          </button>
          <ul className="dropdown-menu custom-dropdown-menu filter-price px-2 my-1">
            <li>
              <a className="dropdown-item custom-dropdown-item filter-text text-left">
                Newest to Oldest
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item custom-dropdown-item filter-text text-left">
                Oldest to Newest
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" align-items-center remove-updated-time">
        <div className="same-line-text  mx-3">{props.amount} Items</div>
      </div>
    </div>
  );
};

export default personalFilterBar;
