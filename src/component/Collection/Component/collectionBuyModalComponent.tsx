import React from "react";
import popcat from "../../../asset/popcat.jpg";
import ETH from "../../../asset/eth.svg";
import "../../../styles/pages/Collection/collectionModalComponent.scss";
const collectionModalBuyItems = () => {
  return (
    <div className="container-fluid p-0 my-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex ">
          <img src={popcat} alt='avatar' className="buy-item-img" />
          <div className="ms-2 align-self-center">
            <div className="buy-item-text buy-item-name">PopCat</div>
            <div className="buy-item-text buy-item-token">358</div>
          </div>
        </div>
        <div className=" align-self-center ">
          <div className="d-flex justify-content-end align-items-center">
            <div className="me-1 buy-item-price">138</div>
            <img src={ETH} alt="eth"  className="buy-item-price-icon"/>
          </div>
          <div className="mt-2 buy-item-usd-price">$ 138.696</div>
        </div>
      </div>
    </div>
  );
};

export default collectionModalBuyItems;
