import React from "react";
import "../../../styles/pages/Collection/collectionFilterAndNFTS.scss"
const collectionQuantity = () => {
  return (
    <div className="filter-heading">
      Quantity
      <div className="form-check ms-1">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          checked
        />
        <label className="form-check-label filter-item" htmlFor="flexRadioDefault1">
          All Items
        </label>
      </div>
      <div className="form-check ms-1">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label filter-item" htmlFor="flexRadioDefault2">
      Single Items
        </label>
      </div>
      <div className="form-check ms-1">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label filter-item" htmlFor="flexRadioDefault2">
          Bundles
        </label>
      </div>
    </div>
  );
};

export default collectionQuantity;
