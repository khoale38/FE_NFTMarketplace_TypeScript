import React from "react";
import CollectionFilterAndNFTS from "./Component/collectionFilterAndNFTS";
import CollectionCategory from "./Component/collectionCategory";
import FilterBar from "./Component/collectionFilterBar";
const CollectionMarket: React.FC = () => {
  return (
    // these child component can be found in Component  folder
    <div>
      <div>
       
        <CollectionCategory />
        <FilterBar />
        <CollectionFilterAndNFTS />
      </div>
    </div>
  );
};

export default CollectionMarket;
