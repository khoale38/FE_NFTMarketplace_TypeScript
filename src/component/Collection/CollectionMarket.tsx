import React from "react";
import CollectionBody from "./collectionFilterAndNFTS";
import CollectionCategory from "./collectionCategory";
import FilterBar from "./filterBar";
const CollectionMarket: React.FC = () => {
  return (
    <div>
      <div>
        <CollectionCategory />
        <FilterBar/>
     <CollectionBody/>
      </div>
    </div>
  );
};

export default CollectionMarket;
