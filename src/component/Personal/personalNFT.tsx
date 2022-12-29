import React, { useState } from "react";

import "../../styles/pages/Collection/NFT.scss";
import "../../styles/pages/Personal/personalNFT.scss";
import logo from "../../asset/logo.svg";
import ETH from "../../asset/eth.svg";
import more from "../../asset/more.svg";
import PersonalSellNFTModal from "./personalSellNFTModal";
import { OwnedNft } from "model/NFT";
import { useAppSelector } from "app/hooks";
import { selectAccount } from "features/connect_wallet/connectWallet";
const PersonalNFT = (props: OwnedNft | any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const log = useAppSelector(selectAccount);

  return (
    <div className="card shadow NFT-card">
      <img
        src={props.rawMetadata.image ?? logo}
        className=" NFT-img"
        alt="NFT"
      />
      <div className=" NFT-cbody px-3 pb-2  d-flex flex-row align-items-center">
        <div className="container-fluid p-0">
          <div className="card-title NFT-name m-0 p-2 pb-0">
            {props.title == "" ? props.contract.address : props.title}
          </div>
          <div className=" container-fluid">
            <div className="d-flex align-items-center">
              <img src={ETH} className="nft-eth-icon" alt="..." />
              <div className="nft-item-price ps-3">{props.balance}</div>
              <div className=" dropup ms-auto">
                <img
                  className="personal-NFT-more"
                  alt="more"
                  src={more}
                  data-bs-toggle="dropdown"
                />

                <ul className="dropdown-menu dropdown-menu-end personal-NFT-more-dropdown">
                  {props.findingAddress == log ? (
                    <li>
                      <button className="dropdown-item" onClick={handleOpen}>
                        List for Sale
                      </button>
                    </li>
                  ) : (
                    <li>
                      <button className="dropdown-item">
                        Offer to buy
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PersonalSellNFTModal
        contract={props.contract}
        tokenId={props.tokenId}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default PersonalNFT;
