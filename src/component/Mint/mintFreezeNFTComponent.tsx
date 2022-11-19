import React from "react";

import ReactTooltip from 'react-tooltip';

const freezeTooltip = "This is freeze metadata tooltip";
const mintFreezeNFTComponent = () => {
  return (
    <div>
      <div className="mint-text-style mint-heading2 ">
        Freeze metadata 
        <i className="bi bi-info-circle-fill mint-info-icon" data-tip={freezeTooltip}>
        </i>
        <ReactTooltip />
      </div>
      <div className="d-flex">
        <div className="mint-text-style mint-explanation mint-grey-text">
          Freezing your metadata will allow you to permanently lock and store
          all of this item's content in decentralized file storage.
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
    </div>
  );
};

export default mintFreezeNFTComponent;
