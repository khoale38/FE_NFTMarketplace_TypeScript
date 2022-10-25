import React from "react";
import "../../../styles/pages/Collection/collectionFilterAndNFTS.scss";
import CollectionFilter from "../CollectionFilter/CollectionFilter"
const CollectionFilterAndNFTS = () => {
  return (
    <div className="container-fluid">
      <div className="row px-5">
        <div className="col-lg-3 px-0 green">
          {/*this component can be found in CollectionFilter folder */}
          <CollectionFilter />
        </div>
        <div className="col-lg-9 red">NFT</div>
      </div>
    </div>
  );
};

export default CollectionFilterAndNFTS;
