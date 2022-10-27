import React from "react";
import popcat from "../../../asset/popcat.jpg";
import "../../../styles/pages/Collection/NFT.scss";
import avatar from "../../../asset/avatar.png";
import ETH from "../../../asset/eth.svg"
const NFT = () => {
  return (
    <div className="card shadow NFT-card">
      <img src={popcat} className=" NFT-img" alt="..." />
      <div className=" NFT-cbody px-3 pb-2  d-flex flex-row align-items-center">
        <div className="NFT-square shadow ">
          <img src={avatar} className="avatar-collection" />
        </div>
        <div>
          <div className="card-title NFT-name m-0 p-2">Card title</div>
          <div className="d-flex m-0 p-2"><div>Starting at: 13.8</div> <img  src={ETH} className="nft-eth-icon" alt="..."/></div>
        </div>
      </div>
    </div>
  );
};

export default NFT;
