import React from "react";
import CollectionFilterStatus from "./collectionFilterStatus";
import CollectionPrice from "./colllectionPrice";
const collectionFilter = () => {
  return (
    <div className="mx-0">
      <CollectionFilterStatus/>
      <CollectionPrice/>
    </div>
  );
};

export default collectionFilter;
