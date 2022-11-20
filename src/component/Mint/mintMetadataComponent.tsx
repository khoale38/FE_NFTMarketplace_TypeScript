import React from "react";
import multiline from "../../asset/multiline.png";
import add from "../../asset/add.svg";
const mintMetadataComponent = () => {
  return (
    <div className="d-flex  justify-content-between my-1">
      <div>
  
          
          <div className="mint-text-style mint-heading2"> <img src={multiline} className="mint-properties-icon" /> Properties</div>
    
        <div className="mint-text-style mint-explanation mint-grey-text">This is the metadata for the item</div>
      </div>
      <img src={add} />
    </div>
  );
};

export default mintMetadataComponent;
