import React from "react";
import multiline from "../../asset/multiline.svg";
import add from "../../asset/add.svg";
const mintMetadataComponent = () => {
  return (
    <div className="d-flex">
      <div className="d-flex">
        <img src={multiline} />
        <div>Properties</div>
        <div>This is the metadata for the item</div>
      </div>
      <div>
        <img src={add} />
      </div>
    </div>
  );
};

export default mintMetadataComponent;
