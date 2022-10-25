import React from "react";
import star from "../../../asset/star.svg";
import share from "../../../asset/share.svg";
import more from "../../../asset/more.svg";
const collectionInfo: React.FC = () => {
  return (
    <div className=" collection-info-grid ">
      <div className="col ">
        <div className="collection-name">Collection Name</div>
        <span className="by">
          By <b className="author-name">Author Name</b>
        </span>
        <div className="collection-describe">
          Description for NFT collection. Example this is one.
        </div>
      </div>
      <div className=" ">
        <div className="col collection-interact ">
          <img src={star} />
          <img src={share} className="px-3" />
          <img src ={more}/>
        </div>
      </div>
    </div>
  );
};

export default collectionInfo;
