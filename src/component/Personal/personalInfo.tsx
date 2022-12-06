import React from "react";
import logo from "../../asset/logo.svg";
import share from "../../asset/share.svg";
import more from "../../asset/more.svg";
import "../../styles/pages/Personal/personalInfo.scss";
const personalInfo = () => {
  return (
    <div className=" collection-info-grid ">
      <div className="col ">
        <div className="collection-name">Personal Name</div>

        <div className="d-flex align-items-center">
          <img className="personal-info-logo me-1" src={logo} />
          <b className="author-name">ID: 0x964D...c3f1</b>
        </div>
      </div>
      <div className=" ">
        <div className="col collection-interact ">
          <img src={share} className="pe-3" />
          <img src={more} />
        </div>
      </div>
    </div>
  );
};

export default personalInfo;
