import React from "react";
import "../../../styles/pages/Collection/collectionPrice.scss";
import "../../../styles/pages/Collection/collectionFilterAndNFTS.scss";
const currency = ["ETH", "USD", "VND"];
const colllectionPrice = () => {
  return (
    <div className="filter-heading">
      Price
      <div className="d-flex align-items-center mb-2 ">
        <div className="dropdown-center pe-2">
          <button
            className="btn btn-secondary dropdown-toggle currency-dropdown"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            USD
          </button>
          <ul className="dropdown-menu price-dropdown">
            {currency.map((e) => {
              return (
                <li>
                  <a className="dropdown-item" href="#">
                   {e}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="input-group price-input ">
          <input
            type="text"
            className="form-control"
            placeholder="Min"
            aria-label="Min"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="price-text px-3 ">To</div>
        <div className="input-group price-input ">
          <input
            type="text"
            className="form-control me-1"
            placeholder="Max"
            aria-label="Max"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary container-fluid apply-price-button"
      >
        Apply
      </button>
    </div>
  );
};

export default colllectionPrice;
