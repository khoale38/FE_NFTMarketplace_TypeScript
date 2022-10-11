import React from "react";
import "../../styles/pages/Collection/collectionPage.scss";
import wallpaper from "../../asset/wallpaper.png";
import avatar2 from "../../asset/avatar2.png";
import CollectionItemsCount from "./collectionItemsCount";
import CollectionInfo from "./collectionInfo";

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
          <CollectionInfo />
          <div className="py-3">
            <CollectionItemsCount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPersonal;
