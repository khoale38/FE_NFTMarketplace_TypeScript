import React from "react";
import "../../styles/pages/Personal/personalDropdownDuration.scss";
const personalSellNFTModalDurationDropDown = () => {
  const duration = [1, 5, 10];
  return (
    <div>
      <div className="dropdown m-0 ">
        <button
          className="btn btn-secondary dropdown-toggle container-fluid d-flex flex-row align-items-center justify-content-between personal-dropdown-style  "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {duration[0]} Month
        </button>
        <ul className="dropdown-menu container-fluid   ">
          <li>
            <a className="dropdown-item personal-dropdown-text" href="#">
              {duration[0]} Month
            </a>
          </li>
          <li>
            <a className="dropdown-item personal-dropdown-text" href="#">
              {duration[1]} Month
            </a>
          </li>
          <li>
            <a className="dropdown-item personal-dropdown-text" href="#">
              {duration[2]} Month
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default personalSellNFTModalDurationDropDown;
