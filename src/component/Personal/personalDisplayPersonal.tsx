import React from "react";
import "../../styles/pages/Collection/collectionPage.scss";
import wallpaper from "../../asset/wallpaper.png";
import avatar2 from "../../asset/avatar2.png";
import PersonalInfo from "./personalInfo";

const personalDisplayPersonal = () => {
  return (
    <div>
      <div className="flex flew-col">
        <div className="custom-placeholder">
          <img
            src={wallpaper}
            alt="wallpaper"
            className="collection-wallpaper custom-placeholder"
          />
          <div className="collection-square mx-5 shadow-lg d-flex">
            <img src={avatar2} alt="avatar" className="collection-avatar" />
          </div>
        </div>
        <div className="pt-5 px-5">
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
};

export default personalDisplayPersonal;
