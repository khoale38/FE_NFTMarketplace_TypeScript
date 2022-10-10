import React from "react";
import eth from "../../asset/eth.svg";
const collectionItemsCount = () => {
  return (
    <div className="d-flex gap-5  ">
      <div className="  p-0  ">
        <div className="  collection-number text-center">813</div>

        <div className="  collection-figure ">Items</div>
      </div>
      <div className=" p-0 ">
        <div className="  collection-number text-center">50.1k</div>

        <div className="  collection-figure ">Owners</div>
      </div>
      <div className="  p-0 ">
        <div className="   collection-number text-center">70.6k</div>

        <div className="  collection-figure ">Volume</div>
      </div>
    </div>
  );
};

export default collectionItemsCount;
