import React from "react";
import popcat from "../../../asset/popcat.jpg";
import "../../../styles/pages/Collection/NFT.scss";
import avatar from "../../../asset/avatar.png";
import ETH from "../../../asset/eth.svg";
import more from "../../../asset/more.svg";
const collectionNFT = () => {
  return (
    <div className="card shadow NFT-card">
      <img src={popcat} className=" NFT-img" alt="..." />
      <div className=" NFT-cbody px-3 pb-2  d-flex flex-row align-items-center">
        <div className="NFT-square shadow-lg ">
          <img src={avatar} className="avatar-NFT" />
        </div>
        <div className="container-fluid p-0">
          <div className="card-title NFT-name m-0 p-2 pb-0">Card title</div>
          <div className=" m-0  container-fluid">
            <div className="starting-at-text  ">Price:</div>
            <div className="d-flex align-items-center">
              <div className="nft-item-price pe-2">13.8</div>
              <img src={ETH} className="nft-eth-icon" alt="..." />
              <img src ={more}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default collectionNFT;
