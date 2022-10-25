import React from "react";

const collectionQuantity = () => {
  return (
    <div>
      Quantity
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          checked
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          All Items
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
      Single Items
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Bundles
        </label>
      </div>
    </div>
  );
};

export default collectionQuantity;
