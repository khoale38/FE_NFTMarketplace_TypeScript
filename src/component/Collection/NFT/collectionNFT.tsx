import React from "react";
import "../../../styles/pages/Collection/NFT.scss";
import "../../../styles/pages/Personal/personalNFT.scss";
import avatar from "../../../asset/avatar.png";
import ETH from "../../../asset/eth.svg";
import CollectionBuyModal from "../Component/collectionBuyModal";
import { Nft } from "model/Collection";
import logo from "../../../asset/logo.svg";

const CollectionNFT = (props: Nft | any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(props.price);

  return (
    <div className="layer-container">
      <div
        className={
          props.isSell
            ? "card shadow NFT-card NFT-layer"
            : "card shadow NFT-card"
        }
      >
        <img
          src={props.media[0].gateway ?? logo}
          className=" NFT-img"
          alt="img"
        />
        <div className=" NFT-cbody px-3 pb-2  d-flex flex-row align-items-center">
          <div className="container-fluid p-0">
            <div className="card-title NFT-name m-0 p-2 pb-0">
              {props.title}
            </div>
            <div className=" m-0  container-fluid card-title">
              <div className="starting-at-text  ">Price:</div>
              <div className="d-flex align-items-center ">
                <div className="nft-item-price NFT-price-width pe-2">
                  {props.price==0 ? "No Sale":props.price}
                </div>
                <img src={ETH} className="nft-eth-icon" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.isSell ? (
        <div>
          <div className="middle-buy-now-container">
            <div className="NFT-buy-now" onClick={handleOpen}>
              Buy Now
            </div>
          </div>
          <CollectionBuyModal open={open} handleClose={handleClose} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CollectionNFT;
