import React from "react";
import "../../styles/pages/Collection/collectionFilterAndNFTS.scss";
import CollectionFilter from "../Collection/CollectionFilter/collectionFilter"
const CollectionBody = () => {
  return (
    <div className="container-fluid">
      <div className="row px-5">
        <div className="col-lg-3 px-0 green">
          <CollectionFilter />
        </div>
        <div className="col-lg-9 red">NFT</div>
      </div>
    </div>
  );
};

export default CollectionBody;
