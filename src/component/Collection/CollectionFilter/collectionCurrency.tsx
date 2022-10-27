import React from "react";
import "../../../styles/pages/Collection/collectionFilterAndNFTS.scss"
const collectionCurrency = () => {
  return (
    <div className="filter-heading">
      Currency
      <div className="form-check ms-1">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
    
        />
        <label className="form-check-label filter-item" htmlFor="flexCheckDefault">
          ETH
        </label>
      </div>
      <div className="form-check ms-1" >
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          
        />
        <label className="form-check-label filter-item ms-1 " htmlFor="flexCheckChecked">
          WETH
        </label>
      </div>
    </div>
  );
};

export default collectionCurrency;
