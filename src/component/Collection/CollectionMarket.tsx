import React from "react";
import CollectionCategory from "./collectionCategory";
import FilterBar from "./filterBar";
const CollectionMarket: React.FC = () => {
  return (
    <div>
      <div>
        <CollectionCategory />
        <FilterBar/>
      </div>
    </div>
  );
};

export default CollectionMarket;
