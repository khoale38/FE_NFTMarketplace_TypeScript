import React from "react";
import Collection from "./collection";

const Collectionlistview = () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="px-5">
      <div className="row">
        {collection.map((item) => (
          <div className="col-lg-3 col-md-6 py-3 "><Collection/></div>
        ))}
      </div>
    </div>
  );
};

export default Collectionlistview;
