import React from "react";
import popcat from "../../../asset/popcat.jpg";
import "../../../styles/pages/Collection/NFT.scss";
import avatar from "../../../asset/avatar.png";
import ETH from "../../../asset/eth.svg";
import CollectionBuyModal from "../Component/collectionBuyModal";


const CollectionNFT = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="layer-container">
      <div className="card shadow NFT-card NFT-layer">
        <img src={popcat} className=" NFT-img" alt="..." />
        <div className=" NFT-cbody px-3 pb-2  d-flex flex-row align-items-center">
          <div className="NFT-square shadow-lg ">
            <img src={avatar} className="avatar-NFT" />
          </div>
          <div className="container-fluid p-0">
            <div className="card-title NFT-name m-0 p-2 pb-0">Card title</div>
            <div className=" m-0  container-fluid card-title">
              <div className="starting-at-text  ">Price:</div>
              <div className="d-flex align-items-center ">
                <div className="nft-item-price NFT-price-width pe-2">
                  0.12438
                </div>
                <img src={ETH} className="nft-eth-icon" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-buy-now-container">
        <div className="NFT-buy-now" onClick={handleOpen}>Buy Now</div>
      </div>
      <CollectionBuyModal open={open} handleClose={handleClose}/>
    </div>
  );
};

export default CollectionNFT;
