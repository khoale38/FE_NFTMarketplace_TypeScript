import React from "react";

const collectionFilterStatus = () => {
  return (
    <div>
      <div>
        Status
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Buy Now
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Auction
          </label>
        </div>
      </div>
    </div>
  );
};

export default collectionFilterStatus;
