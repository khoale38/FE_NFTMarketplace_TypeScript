import React from "react";
import "../../../styles/pages/Collection/collectionFilterAndNFTS.scss";
import CollectionQuantityComponent from "./component/collectionQuantityComponent";
const Quantity = ["All Items", "Single Items", "Bundles","Arcana"];
const collectionQuantity = () => {
  return (
    <div className="filter-heading">
      Quantity
      {Quantity.map((e) => {
        return <CollectionQuantityComponent name={e} />;
      })}
    </div>
  );
};

export default collectionQuantity;
