import React from "react";
import "../../styles/pages/Collection/collectionPage.scss";
import wallpaper from "../../asset/wallpaper.png";
import avatar2 from "../../asset/avatar2.png";
import CollectionItemsCount from "./collectionItemsCount";

const DisplayPersonal: React.FC = () => {
  return (
    <div>
      <div className="flex flew-col">
        <div className="custom-placeholder">
          <img
            src={wallpaper}
            className="collection-wallpaper custom-placeholder"
          />
          <div className="collection-square mx-5 shadow-lg d-flex">
            <img src={avatar2} className="collection-avatar" />
          </div>
        </div>
        <div className="p-5">
          <div>
            <div className="collection-name">Collection Name</div>
            <span className="by">
              By <b className="author-name">Author Name</b>
            </span>
            <div className="collection-describe">Description for NFT collection. Example this is one.</div>
          </div>
          <div  className="py-3">
            <CollectionItemsCount/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPersonal;
