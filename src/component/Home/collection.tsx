import React from "react";
import popcat from "../../asset/popcat.jpg";
import "../../styles/pages/Home/collection.scss";
const Collection: React.FC = () => {
  return (
    <div className="card ">
      <img src={popcat} className="card-img-top collection-img" alt="..." />
      <div className="card-body card-cbody px-3 py-0 d-flex flex-row align-items-center">
        <div className="square">
          <img />
        </div>
        <div className="card-title collection-name m-0">Card title</div>
      </div>
    </div>
  );
};

export default Collection;
