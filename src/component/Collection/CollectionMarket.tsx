import React from "react";
import CollectionFilterAndNFTS from "./Component/collectionFilterAndNFTS";
import CollectionCategory from "./Component/collectionCategory";
import FilterBar from "./Component/collectionFilterBar";


const CollectionMarket = (props: any) => {


  return (
    // these child component can be found in Component  folder
    <div>
      <div>
        <CollectionCategory />
        <FilterBar onSearchChange={props.searchState} amount={props.amount} />
        <CollectionFilterAndNFTS NFTs={props.NFTs} />
      </div>
    </div>
  );
};

export default CollectionMarket;
