import React from "react";
import "../../../styles/pages/Collection/collectionFilterAndNFTS.scss";
import CollectionFilterStatusComponent from "../CollectionFilter/component/collectionFilterStatusComponent"
const Filters =['Buy Now','Auction',"Something"]
const collectionFilterStatus = () => {
  return (
    <div>
      <div className="filter-heading">
        Status
        {Filters.map((e)=>{
          return (<CollectionFilterStatusComponent name={e}/>)

        })}
      </div>
    </div>
  );
};

export default collectionFilterStatus;
