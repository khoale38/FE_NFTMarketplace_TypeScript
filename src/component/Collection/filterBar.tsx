import React from "react";
import searchIcon from "../../asset/search.svg";
import "../../styles/pages/Collection/filterBar.scss";
import Refesh from "../../asset/refresh.svg"
const filterBar: React.FC = () => {
  return (
    <div className="d-flex  filterbar mx-5 my-3">
   <div className="d-flex flex-fill">
   <div className="form-control searchBar ">
        <img src={searchIcon} />
        <input placeholder="Search" className="searchInput px-2" />
      </div>
      <div className="dropdown px-3">
        <button
          className="btn  filter-button dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Price low to high
        </button>
        <ul className="dropdown-menu px-4 my-1">
          <li>
            <a className="dropdown-item  text-left" href="#">
            Price low to high
            </a>
          </li>
          <li>
            <a className="dropdown-item text-left" href="#">
              Price high to low 
            </a>
          </li>
        </ul>
      </div>
   </div>
      <div className=" align-items-center remove-updated-time">
        <img src={Refesh}/>
        <div className="same-line-text updated-time  ms-2  me-3">Updated 69m ago</div>
        <div className="same-line-text  mx-3">4,444 items</div>
      </div>

    </div>
  );
};

export default filterBar;
