import React from "react";
import multiline from "../../asset/multiline.png";
import add from "../../asset/add.svg";
const mintMetadataComponent = () => {
  return (
    <div className="d-flex">
      <div>
        <div className="d-flex">
          <img src={multiline} className="mint-properties-icon" />
          <div className="mint-text-style mint-heading2">Properties</div>
        </div>
        <div className="mint-text-style mint-explanation mint-grey-text">This is the metadata for the item</div>
      </div>
      <img src={add} />
    </div>
  );
};

export default mintMetadataComponent;
