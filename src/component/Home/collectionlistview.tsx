import React from "react";
import Collection from "./collection";

const Collectionlistview = () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="px-5 py-3">
      <div className="row">
        {collection.map((item) => (
          <div className="col-xl-3 col-lg-4 col-md-6 py-3 "><Collection/></div>
        ))}
      </div>
    </div>
  );
};

export default Collectionlistview;
