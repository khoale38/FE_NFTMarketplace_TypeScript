import React from "react";
import "../../../styles/pages/Collection/collectionPrice.scss";
const colllectionPrice = () => {
  return (
    <div>
      Price
      <div className="d-flex">
        <div className="dropdown ">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            USD
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                USD
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                ETH
              </a>
            </li>
          </ul>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Min"
            aria-label="Min"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>To</div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Max"
            aria-label="Max"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <button type="button" className="btn btn-primary container-fluid">
        Primary
      </button>
    </div>
  );
};

export default colllectionPrice;
