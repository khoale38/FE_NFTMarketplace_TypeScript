import React from "react";
import NavBar from "../../component/Home/navbar";
import PersonalBody from "component/Personal/personalbody";
import PersonalFilterBar from "component/Personal/personalFilterBar";
import PersonalFilterAndNFTS from "component/Personal/personalFilterAndNFTS";
const personalPage = () => {
  return (
    <div>
      <NavBar />
      <PersonalBody/>
      <PersonalFilterBar/>
      <PersonalFilterAndNFTS/>
    </div>
  );
};

export default personalPage;
