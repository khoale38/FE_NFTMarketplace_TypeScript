import React from "react";
import "../../../styles/pages/Collection/collectionFilterAndNFTS.scss"
const collectionFilterStatus = () => {
  return (
    <div>
      <div className="filter-heading">
        Status
        <div className="form-check ">
          <input
            className="form-check-input "
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label filter-item" htmlFor="flexCheckDefault">
            Buy Now
          </label>
        </div>
        <div className="form-check ">
          <input
            className="form-check-input "
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label filter-item" htmlFor="flexCheckChecked">
            Auction
          </label>
        </div>
      </div>
    </div>
  );
};

export default collectionFilterStatus;
