import React from "react";

const collectionCurrency = () => {
  return (
    <div>
      Currency
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          ETH
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
          WETH
        </label>
      </div>
    </div>
  );
};

export default collectionCurrency;
