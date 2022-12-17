import React from "react";
import popcat from "../../asset/popcat.jpg";
import "../../styles/pages/Collection/NFT.scss";
import "../../styles/pages/Personal/personalNFT.scss";

import ETH from "../../asset/eth.svg";
import more from "../../asset/more.svg";
import PersonalSellNFTModal from "./personalSellNFTModal";
const PersonalNFT = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              <div className=" dropup ms-auto">
                <img
                  className="personal-NFT-more"
                  alt="more"
                  src={more}
                  data-bs-toggle="dropdown"
                />

                <ul className="dropdown-menu dropdown-menu-end personal-NFT-more-dropdown">
                  <li>
                    <button className="dropdown-item" onClick={handleOpen}>
                      List for Sale
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PersonalSellNFTModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default PersonalNFT;
