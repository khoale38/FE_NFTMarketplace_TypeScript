import React from "react";
import popcat from "../../../asset/popcat.jpg";
import ETH from "../../../asset/eth.svg";
import "../../../styles/pages/Collection/collectionModalComponent.scss";
const collectionModalBuyItems = () => {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img src={popcat} className="buy-item-img" />
          <div>
            <div>PopCat</div>
            <div>358</div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-end">
            <div>138</div>
            <img src={ETH} alt="eth" />
          </div>
          <div>$ 138.696</div>
        </div>
      </div>
    </div>
  );
};

export default collectionModalBuyItems;
