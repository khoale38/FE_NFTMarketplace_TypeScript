import React from "react";
import popcat from "../../asset/popcat.jpg";
import "../../styles/pages/Home/collection.scss";
const Collection: React.FC = () => {
  return (
    <div className="card text-center">
      <img src={popcat} className="card-img-top collection-img" alt="..." />
      <div className="card-body px-3 py-2 ">
        <div className="square">
          <img />
        </div>
        <div className="card-title collection-name">Card title</div>
      </div>
    </div>
  );
};

export default Collection;
