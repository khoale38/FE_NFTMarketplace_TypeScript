import React from "react";
import popcat from "../../asset/popcat.jpg";
import "../../styles/pages/Collection/NFT.scss";
import avatar from "../../asset/avatar.png";
import ETH from "../../asset/eth.svg";
import more from "../../asset/more.svg";
const personalNFT = () => {
  return (
    <div className="card shadow NFT-card">
      <img src={popcat} className=" NFT-img" alt="..." />
      <div className=" NFT-cbody px-3 pb-2  d-flex flex-row align-items-center">
        <div className="container-fluid p-0">
          <div className="card-title NFT-name m-0 p-2 pb-0">NFT Name</div>
          <div className=" container-fluid">
            <div className="d-flex align-items-center">
            <img src={ETH} className="nft-eth-icon" alt="..." />
            <div className="nft-item-price ps-3">13.8</div>
            <img  className='ms-auto' src ={more}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default personalNFT;
